- To create an image for k8s-dashboard from this fork of the upstream repository, we trigger a build in this TeamCity (TC) build configuration: <https://teamcity.platform9.horse/buildConfiguration/Pf9project_Platform9ComponentsForKubernetes_KuberenetesuiDashboard?mode=builds#all-projects>

- As a part of the build steps, we execute `install_dependency srcipt`, which installs npm,node through nvm, installs all the required dependencies and then buids the binary and Dockerfile for k8s-dashboard.

- Post this, we run `make pf9-image` which builds the docker image and then make `pf9-push`which pushes this to platform9/kuberenetesui-dashboard in dockerhub.

- To run a build on a private/release branch, do use the TC build configuration stated above to build and push new images and to test the changes in the branch.