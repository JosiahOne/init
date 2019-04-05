# Setups environment for macOS. Assumes 10.13 (High Sierra)

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

# Install Node / NPM
# TODO

# Install nativefier (assumes NPM is available)
npm update;
npm install nativefier -g;

# Install web apps using nativefier (which uses Electron).
# Remember, vulnerabilities are found in Electron with regularity.
# Therefore, we repackage these apps each time to bump versions as
# appropiate.

# FB Messenger
nativefier --name "Messenger" messenger.com;
cd Messenger*;
cp -r Messenger.app/ /Applications/Messenger.app/;
cd ..;
rm -rf Messenger-darwin-x64/;

# Google Messages
nativefier --name "Google Messages" messages.google.com/web;
cd Google\ Messages-darwin-x64/;
cp -r Google\ Messages.app/ /Applications/Google\ Messages.app/
cd ..;
rm -rf Google\ Messages-darwin-x64/;

