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

and login with **admin / admin** for testing

### 2.5) Stop Artiference

```shell
./stop.sh
```

- After stopping, you need to close all terminal manually

## 3) How to inference ( using Simple Model for testing )

After successful 2.4)login step, 
You can inference like below

### 3.1) Model Create

If you have successfully logged in, you will be taken to the inference-list page.

Model Create, Follow the flow of the image below.
-----------------------------------
<div>
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_1.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_2.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_3.png">
</div>
Click Model tab -> Create button -> Import button
<br/>
<br/>
<div>
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_4.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_5.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_6.png">
</div>
Select Model config.pbtxt ( path : skaffold/model/simple/config.pbtxt )
<br/>
<br/>
<div>
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_7.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_8.png">
  <img width="330" height="500" src="https://github.com/yoonghee/reactStudy/blob/master/create_model_9.png">
</div>
Select Model model.graphdef ( path : skaffold/model/simple/1/model.graphdef )
<br/> And Validation
<br/>
<br/>

### 3.2) Inference Service Create

If you have successfully created Model, create Inference Service for inference

Inference Create, Follow the flow of the image below.
-----------------------------------
<div>
  <img width="330" src="https://github.com/yoonghee/reactStudy/blob/master/create_inference_1.png">
  <img width="330" src="https://github.com/yoonghee/reactStudy/blob/master/create_inference_2.png">
  <img width="330" src="https://github.com/yoonghee/reactStudy/blob/master/create_inference_3.png">
</div>
Click Create button -> Create button -> Enter Info -> Create button
<br/>
Prepare by copying the endpoint and token for 3.3.1)
<br/>
<br/>


### 3.3) Inference Test ( Python )

Inference test by created simple model

#### 3.3.1) Test Configuration

Open test.py code ( path : skaffold/test.py )

Enter the copied endpoint and token into the blank space like below the match.
-----------------------------------
<pre>
<code>
token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2xvY..."
addr = "https://localhost..."
</code>
</pre>

#### 3.3.2) Execute Test Code

```shell
python test.py
```

#### 3.3.2) Inference Result

If successful, you will see something like below.
-----------------------------------
<div>
  <img src="https://github.com/yoonghee/reactStudy/blob/master/result_inference.png">
</div>
