# Quick Start artiference

This document describe how to develop artiference using skaffold

## Prerequisite

- Kubernetes
- Skaffold : https://skaffold.dev/docs/install/

## How to development

Now, the scrips supports only mac

### Download Projects

```shell
./bootstrap.sh
```

- this will downloads all projects related to artiference on current directory.

### Initialize Artiference

```shell
./init.sh
```

- this will initialize volumn and db.
- A job will be deployed to initialize db tables.
- After job completed, you can go next

### Deploy Applications

Artiference has inference-manager, web

To install both of them, refer to follings.

```shell
./deployfor.sh inference-manager
./deployfor.sh web 
```
- this is for deploying a application to kubernetes using run.DockerFile in the project

### How to access to web service and login 

After Deploying all component (inference-manager, web)
You can access https://localhost:30089

and login with admin / admin for testing

### Stop Artiference

```shell
./stop.sh
```

- After stopping, you need to close all terminal manually
