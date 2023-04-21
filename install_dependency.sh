#!/bin/bash

curl -sL -o ~/.local/bin/gimme https://raw.githubusercontent.com/travis-ci/gimme/master/gimme

chmod +x ~/.local/bin/gimme

eval "$(gimme 1.17)"

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load nvm
source ~/.nvm/nvm.sh

# Install node 16.13.0
nvm install v16.13.0


npm install -g npm@6.14.10

npm --version

node -v

npm ci

npm i bc

./aio/scripts/build.sh
