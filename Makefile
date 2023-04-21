registry_url = docker.io
image_name = ${registry_url}/platform9/kubernetesui-dashboard
DOCKERFILE?=$(CURDIR)/dist/amd64/Dockerfile
image_tag = v2.4.0-pmk-$(TEAMCITY_BUILD_ID)
PF9_TAG=$(image_name):${image_tag}
IMG_TAG = docker.io/platform9/kubernetesui-dashboard:v2.4.0-pmk-$(TEAMCITY_BUILD_ID)
DOCKERARGS=
ifdef HTTP_PROXY
	DOCKERARGS += --build-arg http_proxy=$(HTTP_PROXY)
endif
ifdef HTTPS_PROXY
	DOCKERARGS += --build-arg https_proxy=$(HTTPS_PROXY)
endif

pf9-image: | $(CURDIR) ; $(info Building Docker image for pf9 Repo...) @ ## Build kubernetesui-dashboard docker image
	@docker build -t $(PF9_TAG) -f $(DOCKERFILE)  $(CURDIR) $(DOCKERARGS)
	echo ${PF9_TAG} > $(CURDIR)/dist/amd64/container-tag

pf9-push: 
    echo ${IMG_TAG} > $(CURDIR)/container-tag
	docker login
	docker tag kubernetesui/dashboard-amd64:v2.4.0-pmk ${IMG_TAG}
	docker push $(IMG_TAG)\
	&& docker rmi $(IMG_TAG)