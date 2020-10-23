# Quick Start artiference

This document describe how to develop artiference using skaffold

## 1) Prerequisite

- Kubernetes
- Skaffold : https://skaffold.dev/docs/install/

## 2) How to development

Now, the scrips supports only mac

### 2.1) Download Projects

```shell
./bootstrap.sh
```

- this will downloads all projects related to artiference on current directory.

### 2.2) Initialize Artiference

```shell
./init.sh
```

- this will initialize volumn and db.
- A job will be deployed to initialize db tables.
- After job completed, you can go next

### 2.3) Deploy Applications

Artiference has inference-manager, web

To install both of them, refer to follings.

```shell
./deployfor.sh inference-manager
./deployfor.sh web 
```
- this is for deploying a application to kubernetes using run.DockerFile in the project

### 2.4) How to access to web service and login 

After Deploying all component (inference-manager, web)
You can access https://localhost:30089

and login with admin / admin for testing

### 2.5) Stop Artiference

```shell
./stop.sh
```

- After stopping, you need to close all terminal manually

## 3) How to inference ( using Simple Model )

After successful login step, 
You can inference like below

### 3.1) Download Model

For example. Download Simple Model

### 3.2) Model Create

### 3.3) Inference Create

### 3.4) Inference Test ( Python )

#### 3.4.1) Configuration

#### 3.4.2) Inference Result
