"use strict";var e=require("os"),n=require("child_process"),t=require("fs"),r=require("path");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),i=a(n),s=a(t),l=a(r),c={};Object.defineProperty(c,"__esModule",{value:!0});var d=o.default,u=i.default,p=s.default,f=l.default;function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g=m(d),y=m(p),h=m(f);const w=/\s+at.*(?:\(|\s)(.*)\)?/,v=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,k=void 0===g.default.homedir?"":g.default.homedir();class b extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let n=(e=[...e].map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>{return"string"==typeof e.stack?(e=>e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""))((n=e.stack,t=Object.assign({pretty:!1},t),n.replace(/\\/g,"/").split("\n").filter((e=>{const n=e.match(w);if(null===n||!n[1])return!0;const t=n[1];return!t.includes(".app/Contents/Resources/electron.asar")&&!t.includes(".app/Contents/Resources/default_app.asar")&&!v.test(t)})).filter((e=>""!==e.trim())).map((e=>t.pretty?e.replace(w,((e,n)=>e.replace(n,n.replace(k,"~")))):e)).join("\n"))):String(e);var n,t})).join("\n");n="\n"+((e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!=typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!=typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!=typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const r=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(r,t.indent.repeat(n))})(n,4),super(n),this.name="AggregateError",Object.defineProperty(this,"_errors",{value:e})}*[Symbol.iterator](){for(const e of this._errors)yield e}}var E=b;const $=(e,n,t)=>new Promise(((r,a)=>{if(t=Object.assign({concurrency:1/0},t),"function"!=typeof n)throw new TypeError("Mapper function is required");const{concurrency:o}=t;if(!("number"==typeof o&&o>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${o}\` (${typeof o})`);const i=[],s=e[Symbol.iterator]();let l=!1,c=!1,d=0,u=0;const p=()=>{if(l)return;const e=s.next(),t=u;if(u++,e.done)return c=!0,void(0===d&&r(i));d++,Promise.resolve(e.value).then((e=>n(e,t))).then((e=>{i[t]=e,d--,p()}),(e=>{l=!0,a(e)}))};for(let e=0;e<o&&(p(),!c);e++);}));var j=$,P=$;j.default=P;const A=async(e,n,t)=>(await j(e,((e,t)=>Promise.all([n(e,t),e])),t)).filter((e=>Boolean(e[0]))).map((e=>e[1]));var x=A,C=A;x.default=C;const D="undefined"!=typeof atom,N="undefined"!=typeof atom&&(atom.inDevMode()||atom.inSpecMode());var S=/["'&<>]/,T=function(e){var n,t=""+e,r=S.exec(t);if(!r)return t;var a="",o=0,i=0;for(o=r.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}i!==o&&(a+=t.substring(i,o)),i=o+1,a+=n}return i!==o?a+t.substring(i,o):a};function I(e,n,t){let r;const a=async function(e,n,t){const r=u.spawn(e,n,t),a=new Promise(((e,n)=>{const a={stdout:r.stdout?[]:null,stderr:r.stderr?[]:null};r.on("error",n),r.stdout&&r.stdout.on("data",(function(e){a.stdout.push(e),t.handleStdout&&t.handleStdout(e)})),r.stderr&&r.stderr.on("data",(function(e){a.stderr.push(e),t.handleStderr&&t.handleStderr(e)})),r.on("close",(n=>{let r=null;null!=a.stdout&&(r=null===t.encoding||"buffer"===t.encoding?Buffer.concat(a.stdout):a.stdout.join(""));let o=null;null!=a.stderr&&(o=null===t.encoding||"buffer"===t.encoding?Buffer.concat(a.stderr):a.stderr.join("")),e({exitCode:n,stdout:r,stderr:o})}))}));return t.handleChildProcess(r),a}(e,n,{...t,handleChildProcess(e){r=e}});return a.kill=function(e){return r.kill(e)},a}async function O(e){if(D){const n=await async function(e){var n;const t=atom.packages.getLoadedPackage(e.name);return null==t?null:null!==(n=t.metadata.version)&&void 0!==n?n:null}(e);if(n)return n}return async function(e){var n,t;const{directory:r}=e;if(null==r)return null;let a=null;try{a=JSON.parse(await y.default.promises.readFile(h.default.join(r,"package.json"),"utf8"))}catch(e){return null}return null!==(n=null===(t=a)||void 0===t?void 0:t.version)&&void 0!==n?n:null}(e)}const M=D?async function(e){return atom.packages.resolvePackagePath(e)}:async function(e){var n;const t=h.default.join(null!==(n=process.env.ATOM_HOME)&&void 0!==n?n:h.default.join(g.default.homedir(),".atom"),"packages",e);try{return await y.default.promises.access(t,y.default.constants.R_OK),t}catch(e){return null}};function q(e,n){if(!e)throw new Error(null!=n?n:"Invariant violation")}async function V(e){const n=await(D?async function(e){const n=atom.packages.getLoadedPackage(e),t=n&&n.metadata["package-deps"];return Array.isArray(t)?t:[]}(e):async function(e){let n=null;try{n=await y.default.promises.stat(e)}catch(e){}if(null==n||!n.isDirectory())throw new Error("[Package-Deps] Expected packageName to be a readable directory in Node.js invocation");let t=null;try{const n=await y.default.promises.readFile(h.default.join(e,"package.json"),"utf8");t=JSON.parse(n)}catch(e){}const r=null==t||"object"!=typeof t?[]:t["package-deps"];return Array.isArray(r)?r:[]}(e));return N&&(q(Array.isArray(n),`Dependencies for ${e} are not a valid array`),n.forEach(((n,t)=>{if(Array.isArray(n))n.forEach(((n,r)=>{const a=`Dependency#${t}#${r} for ${e} is invalid`;q("string"==typeof n.name&&n.name.length>0,a),q(null==n.minimumVersion||"string"==typeof n.minimumVersion&&n.minimumVersion.length>0,a)})),q(n.length>0,`Dependency#${t} for ${e} has no group items`);else{const r=`Dependency#${t} for ${e} is invalid`;q("string"==typeof n.name&&n.name.length>0,r),q(null==n.minimumVersion||"string"==typeof n.minimumVersion&&n.minimumVersion.length>0,r)}}))),n}async function L(e){if(null==e.directory)return!0;if(null==e.minimumVersion)return!1;const n=await O(e);return null==n||1===function(e,n){for(var t=e.split("."),r=n.split("."),a=0;a<3;a++){var o=Number(t[a]),i=Number(r[a]);if(o>i)return 1;if(i>o)return-1;if(!isNaN(o)&&isNaN(i))return 1;if(isNaN(o)&&!isNaN(i))return-1}return 0}(e.minimumVersion,n)}const _=new Set(["✓","done"]),F=/(?:Installing|Moving) (.*?) to .* (.*)/;async function H(e){if("string"==typeof e)return{name:e,directory:await M(e)};if("name"in e)return{...e,directory:await M(e.name)};throw console.error("This package-deps entry is not valid. Please see https://github.com/steelbrain/package-deps#how-it-works",{entry:e}),Error("The package-deps entry is not valid. Please see https://github.com/steelbrain/package-deps#how-it-works")}let B=!0;const U=D?function({packageName:e,dependencies:n}){const t=[],r=atom.notifications.addInfo(`Installing ${e} dependencies`,{detail:`Installing ${n.map((e=>e.name)).join(", ")}`,dismissable:!0}),a=document.createElement("progress");a.max=n.length,a.style.width="100%";try{var o;const e=atom.views.getView(r),n=null!==(o=null==e?void 0:e.element)&&void 0!==o?o:null;if(null==n)throw new Error("Unable to get notification element from view");const t=n.querySelector(".detail-content");if(null==t)throw new Error("Content detail container not found inside the notification");t.appendChild(a)}catch(e){console.error("[Package-Deps] Error during showing installation progress to user",e)}return{handleFailure({dependency:e,error:n}){var r;t.push(e.name),a.value+=1,console.error(`[Package-Deps] Unable to install ${e.name}, Error:`,null!==(r=null==n?void 0:n.stack)&&void 0!==r?r:n)},handleDependencyInstalled(e){a.value+=1},handleComplete(){r.dismiss(),t.length>0?atom.notifications.addWarning(`Failed to install ${e} dependencies`,{detail:`These packages were not installed, check your console\nfor more info.\n${t.join("\n")}`,dismissable:!0}):atom.notifications.addSuccess(`Installed ${e} dependencies`,{detail:`Installed ${n.map((e=>e.name)).join(", ")}`}),Promise.all(n.map((e=>t.includes(e.name)?null:atom.packages.activatePackage(e.name)))).catch((n=>{console.error(`[Package-Deps] Error activating installed packages for ${e}`,n)}))}}}:function({dependencies:e}){let n=!1;return console.log(`Installing dependencies:\n${e.map((e=>`  - ${e.name}`)).join("\n")}`),{handleFailure({dependency:e,error:t}){var r;n=!0,console.error(`Unable to install ${e.name}, Error:`,null!==(r=null==t?void 0:t.stack)&&void 0!==r?r:t)},handleDependencyInstalled(e){console.log("Successfully installed",e.name)},handleComplete(){console.log("Installation complete"),n&&(process.exitCode=1)}}},R=D?function({packageName:e,dependencies:n}){return new Promise((t=>{const r=n.filter((e=>!Array.isArray(e))),a=n.filter((e=>Array.isArray(e))),o=0===a.length,i=o?r.map((e=>e.name)).join(", "):"Something went wrong. Check your developer console",s=a.map((e=>e[0]));atom.packages.isPackageDisabled("notifications")&&console.warn(`Enable notifications to install dependencies for ${e}`);const l=atom.notifications.addInfo(`${e} needs to install dependencies`,{dismissable:!0,icon:"cloud-download",detail:i,description:`Install dependenc${1===n.length?"y":"ies"}?`,buttons:[{text:"Yes",onDidClick:()=>{t(o?r:r.concat(s)),l.dismiss()}},{text:"No Thanks",onDidClick:()=>{l.dismiss()}},{text:"Never",onDidClick:()=>{!function(e){var n;if(!D)return;const t=new Set(null!==(n=atom.config.get("atom-package-deps.ignored"))&&void 0!==n?n:[]);t.add(e),atom.config.set("atom-package-deps.ignored",Array.from(t))}(e),B&&(B=!1,atom.notifications.addInfo("How to reset package-deps memory",{dismissable:!0,description:"To modify the list of ignored files invoke 'Application: Open Your Config' and change the 'atom-package-deps' section"})),l.dismiss()}}]});if(l.onDidDismiss((()=>t([]))),!o)try{var c;const e=atom.views.getView(l),n=null!==(c=null==e?void 0:e.element)&&void 0!==c?c:null;if(null==n)throw new Error("Unable to get notification element from view");const t=n.querySelector(".detail-content");if(null==t)throw new Error("Content detail container not found inside the notification");if(t.innerHTML="",r.length>0){const e=document.createElement("div");e.innerHTML=`Packages without choices: <br /><ul><li>${r.map((e=>T(e.name))).join("</li><li>")}</li></ul>`,t.appendChild(e)}const o=document.createElement("div");o.innerHTML="Packages with choices:",t.appendChild(o);const i=document.createElement("ul");a.forEach(((e,n)=>{const t=document.createElement("li"),r=document.createElement("select");r.innerHTML=e.map((e=>`<option>${T(e.name)}</option>`)).join("\n"),r.addEventListener("change",(()=>{const t=e.find((e=>e.name===r.value));null!=t&&(s[n]=t)})),t.style.marginTop="5px",t.appendChild(r),i.appendChild(t)})),t.appendChild(i)}catch(e){console.error("[Package-Deps] Error during showing package choices to user",e)}}))}:async function({dependencies:e}){return e.map((e=>Array.isArray(e)?e[0]:e))};var J=c.install=async function(e,n=!1){if(q("string"==typeof e&&e.length>0,"[Package-Deps] Package name is required"),t=e,D&&(null!==(r=atom.config.get("atom-package-deps.ignored"))&&void 0!==r?r:[]).includes(t))return;var t,r;const a=await V(e);if(0===a.length)return;const o=await Promise.all(a.map((async e=>Array.isArray(e)?Promise.all(e.map(H)):H(e)))),i=await x(o,(async function(e){return Array.isArray(e)?(await Promise.all(e.map((e=>L(e))))).every(Boolean):L(e)}));if(0===i.length)return;let s;if(s=n?i.map((e=>Array.isArray(e)?e[0]:e)):await R({packageName:e,dependencies:i}),0===s.length)return;const l=U({packageName:e,dependencies:s});await(async(e,n,{concurrency:t=1/0,stopOnError:r=!0}={})=>new Promise(((a,o)=>{if("function"!=typeof n)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(t)&&t!==1/0||!(t>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`);const i=[],s=[],l=e[Symbol.iterator]();let c=!1,d=!1,u=0,p=0;const f=()=>{if(c)return;const e=l.next(),t=p;if(p++,e.done)return d=!0,void(0===u&&(r||0===s.length?a(i):o(new E(s))));u++,(async()=>{try{const r=await e.value;i[t]=await n(r,t),u--,f()}catch(e){r?(c=!0,o(e)):(s.push(e),u--,f())}})()};for(let e=0;e<t&&(f(),!d);e++);})))(s,(async function(e){try{await async function(e){const n=D?`"${atom.packages.getApmPath()}"`:"apm",{stdout:t,stderr:r}=await I(n,["install",e.name,"--production","--color","false"],{shell:!0}),a=F.exec(t.trim());if(null!=a&&_.has(a[2]))return;const o=new Error(`Error installing dependency: ${e.name}`);throw o.stack=r.trim(),o}(e),l.handleDependencyInstalled(e)}catch(n){l.handleFailure({dependency:e,error:n})}}),{concurrency:2}),l.handleComplete()},Y=Object.freeze(Object.assign(Object.create(null),c,{install:J,default:c}));exports.index=Y;
//# sourceMappingURL=index-4c99303f.js.map