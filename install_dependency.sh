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

export TERM=xterm-256color

npm run docker:build

docker login
docker tag kubernetesui/dashboard-amd64:v2.4.0-pmk docker.io/platform9/kubernetesui-dashboard:v2.4.0-pmk-$(TEAMCITY_BUILD_ID)
docker push docker.io/platform9/kubernetesui-dashboard:v2.4.0-pmk-$(TEAMCITY_BUILD_ID)

