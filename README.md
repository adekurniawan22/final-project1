

# Documentation RESTFULL API v1
* **POST /api/v1/users/register : for register user** _(this endpoint for create new user)_ <br/>
![1](https://user-images.githubusercontent.com/57614206/195974055-acdca7df-b7fd-4aae-896f-31e898949008.png)

* **POST /api/v1/users/login : for login user** _(if user data is correct, it will return token)_ <br>
![2](https://user-images.githubusercontent.com/57614206/195974110-41befecc-a01b-422d-a853-6dc9972415ac.png)

* **POST /api/v1/users/reflections : for create data user** _(in headers.authorization user must input token for create new data reflection)_ <br>
![3](https://user-images.githubusercontent.com/57614206/195974162-0fabf03e-2eec-42f5-9762-c9e5ee9864c6.png)


* **GET /api/v1/users/reflections : for get data user** _(if user have data reflection, it will return it)_ <br>
![4](https://user-images.githubusercontent.com/57614206/195974166-f5868de9-2fcd-4010-b16d-6b94694bd803.png)


* **PUT /api/v1/users/reflections/:id : for edit data user** _(if you have token in headers.authorization, to change data reflection user must input reflectionid in parameters)_ <br>
![5](https://user-images.githubusercontent.com/57614206/195974187-6f8d7c73-226e-4d06-8225-2ceb3147277f.png)


* **DELETE /api/v1/users/reflections/:id : for delete data user**  _(if you have token in headers.authorization, to delete data reflection user must input reflectionid in parameters)_ <br>
![6](https://user-images.githubusercontent.com/57614206/195974194-626700af-750c-4500-9ee9-5a9370eb3d0f.png)
