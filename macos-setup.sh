# Setups environment for macOS. Assumes 12.1 (Big Sur)

# Sometimes necessary
sudo xcodebuild -license accept

# System Updates
brew update;
brew upgrade;

# Assume homebrew is installed (FIXME)
brew install conan;
brew install neofetch;
brew install googler;
brew install bat;
brew install fd;
brew install git-secrets;
brew install thefuck

# Install Node / NPM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node

# Setup vim
curl https://raw.githubusercontent.com/JosiahOne/vimrc/master/.vimrc > ~/.vimrc
git clone https://github.com/leafgarland/typescript-vim.git ~/.vim/pack/typescript/start/typescript-vim

# Install nativefier (assumes NPM is available)
npm update;
npm install nativefier -g;

# Setup shell (assuming zsh)

# Install Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Install web apps using nativefier (which uses Electron).
# Remember, vulnerabilities are found in Electron with regularity.
# Therefore, we repackage these apps each time to bump versions as
# appropiate.

# Google Messages
rm -rf /Applications/Google\ Messages.app/;
nativefier --name "Google Messages" https://messages.google.com/web;
cd Google\ Messages-darwin-*/;
cp -r Google\ Messages.app/ /Applications/Google\ Messages.app/
cd ..;
rm -rf Google\ Messages-darwin-*/;

# Google Chat
rm -rf /Applications/Google\ Chat.app/;
nativefier --name "Google Chat" https://chat.google.com;
cd Google\ Chat-darwin-*/;
cp -r Google\ Chat.app/ /Applications/Google\ Chat.app/
cd ..;
rm -rf Google\ Chat-darwin-*/;
