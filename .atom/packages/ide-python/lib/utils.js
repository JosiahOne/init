const cp = require("child_process")
const { Directory } = require("atom")

const VIRTUAL_ENV_BIN_DIRS = ["bin", "Scripts"]
const VIRTUAL_ENV_EXECUTABLES = ["python", "python.exe"]

function detectPipEnv(path) {
  return new Promise((resolve) => {
    const pipEnvProcess = cp.spawn("pipenv", ["--venv"], {
      cwd: path,
    })
    pipEnvProcess.stdout.on("data", (data) => {
      resolve(`${data}`.trim())
    })
    pipEnvProcess.stderr.on("data", () => {
      resolve(null)
    })
    pipEnvProcess.on("error", () => {
      resolve(null)
    })
  })
}

async function detectVirtualEnv(path) {
  const entries = await new Promise((resolve) => {
    new Directory(path).getEntries((error, resolvedEntries) => {
      if (error === null) {
        resolve(resolvedEntries)
      } else {
        resolve(null)
      }
    })
  })
  if (entries) {
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (VIRTUAL_ENV_BIN_DIRS.indexOf(entry.getBaseName()) !== -1) {
          for (const executable of VIRTUAL_ENV_EXECUTABLES) {
            /* eslint-disable-next-line no-await-in-loop */
            if (await entry.getFile(executable).exists()) {
              return path
            }
          }
        } else {
          for (const dir_name of VIRTUAL_ENV_BIN_DIRS) {
            for (const executable of VIRTUAL_ENV_EXECUTABLES) {
              /* eslint-disable-next-line no-await-in-loop */
              if (await entry.getSubdirectory(dir_name).getFile(executable).exists()) {
                return entry.getPath()
              }
            }
          }
        }
      }
    }
  }
}

function sanitizeConfig(config) {
  Object.entries(config).forEach(([key, value]) => {
    if (value === "null") {
      config[key] = null
    }
  })
  return config
}

function replacePipEnvPathVar(pythonPath, pipEnvPath) {
  if (pythonPath.indexOf("$PIPENV_PATH") !== -1 && pipEnvPath) {
    return pythonPath.replace("$PIPENV_PATH", pipEnvPath)
  }
  return pythonPath
}

exports.detectVirtualEnv = detectVirtualEnv
exports.sanitizeConfig = sanitizeConfig
exports.detectPipEnv = detectPipEnv
exports.replacePipEnvPathVar = replacePipEnvPathVar
