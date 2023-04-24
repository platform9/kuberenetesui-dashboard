registry_url = docker.io
image_name = ${registry_url}/platform9/kubernetesui-dashboard
DIST_DIR = $(CURDIR)/dist/amd64
DOCKERFILE?=$(CURDIR)/dist/amd64/Dockerfile
image_tag = v2.4.0-pmk-$(TEAMCITY_BUILD_ID)
PF9_TAG=$(image_name):${image_tag}
DOCKERARGS=
ifdef HTTP_PROXY
	DOCKERARGS += --build-arg http_proxy=$(HTTP_PROXY)
endif
ifdef HTTPS_PROXY
	DOCKERARGS += --build-arg https_proxy=$(HTTPS_PROXY)
endif

pf9-image:
	$(info Building Docker image for pf9 Repo...) @ ## Build kubernetesui-dashboard docker image
	pwd
	pushd $(DIST_DIR)
	docker build -t $(PF9_TAG) -f $(DOCKERFILE) . $(DOCKERARGS)
	echo ${PF9_TAG} > $(CURDIR)/dist/amd64/container-tag
	popd || exit

pf9-push:
	docker login
	docker push $(PF9_TAG)\
	&& docker rmi $(PF9_TAG)
