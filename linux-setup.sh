# Sets up my starter environment on linux platforms.

# Function Definitions
function setupmoz {
  # Ensure hg is installed
  sudo apt-get install mercurial;
  
  # First, build pre-reqs from https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build/Linux_and_MacOS_build_preparation
  mkdir src && cd src;
  wget https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py;
  python bootstrap.py;
  
  # Second, setup TB source from https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Thunderbird_build
  hg clone https://hg.mozilla.org/mozilla-central source/
  cd source/
  hg clone https://hg.mozilla.org/comm-central comm/
  cd ..;
  
  # Third, boostrap from cloned source.
  cd source;
  ./mach boostrap;
  
  # Fourth, configure for TB builds
  echo 'ac_add_options --enable-application=comm/mail' > mozconfig;
  cd ..;

  echo "Thunderbird source cloned. Please refer to https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Thunderbird_build for the remaining instructions"
}

function setupelectron {
  git clone https://github.com/JosiahOne/electron.git;
  cd electron;
  git remote add upstream https://github.com/electron/electron.git;
  git fetch upstream;
  cd ..;
  
  echo "Electron source cloned. Please refer to https://electronjs.org/docs/development/pull-requests#step-2-build for the rest."
}

function setupdebianvm {
  sudo sh -c 'echo deb http://ftp.debian.org/debian stretch-backports main contrib > /etc/apt/sources.list.d/stretch-backports.list'
  sudo apt-get install virtualbox-guest-dkms virtualbox-guest-x11 linux-headers-$(uname -r)
}

function setupdebianvmware {
  sudo apt-get install open-vm-tools
}

function setupatom {
  wget https://atom.io/download/deb -O atom.deb
  sudo dpkg -i atom.deb
  sudo apt-get install -f 
}

# System updates
sudo apt-get update;
sudo apt-get upgrade;
sudo apt-get install;

# Install usual packages.
sudo apt-get --yes install git vim curl unzip;

# Install vim configuration
curl https://raw.githubusercontent.com/JosiahOne/vimrc/master/.vimrc > ~/.vimrc

# Ask to setup mozilla dev environment
echo "Do you wish to setup your Mozilla dev environment?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) setupmoz; break;;
        No ) break;;
    esac
done

# Ask to setup electron dev environment
echo "Do you wish to setup your Electron dev environment?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) setupelectron; break;;
        No ) break;;
    esac
done

# Ask to setup Debian VM settings
echo "Are you on a Debian VirtualBox VM and want to install guest additions?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) setupdebianvm; break;;
        No ) break;;
    esac
done


# Ask to setup Debian VM settings
echo "Are you on a Debian VMWare VM and want to install guest additions?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) setupdebianvmware; break;;
        No ) break;;
    esac
done


# Ask to setup Atom Editor
echo "Are you on a Debian VM and want to install Atom?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) setupatom; break;;
        No ) break;;
    esac
done

echo "Setup Complete"
