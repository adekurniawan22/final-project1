

# Documentation RESTFULL API v1
* **POST /api/v1/users/register : for register user** _(this endpoint for create new user)_ <br/>
![1](https://user-images.githubusercontent.com/57614206/196035120-3ad1c253-d577-4fb2-9247-9221ada26349.png)


* **POST /api/v1/users/login : for login user** _(if user data is correct, it will return token)_ <br>
![2](https://user-images.githubusercontent.com/57614206/196035125-ce3bab87-c0cc-458e-8612-37bc6917a30d.png)


* **POST /api/v1/users/reflections : for create data user** _(in headers.authorization user must input token for create new data reflection)_ <br>
![3](https://user-images.githubusercontent.com/57614206/196035132-76352539-db3d-4f21-ab22-7923fe2557a9.png)
![4](https://user-images.githubusercontent.com/57614206/196035139-bebc462f-5a23-40ad-8f60-a27479da04e1.png)


* **GET /api/v1/users/reflections : for get data user** _(if user have data reflection, it will return it)_ <br>
![5](https://user-images.githubusercontent.com/57614206/196035151-b2c13800-1d71-4c80-a77c-fa31c78dded0.png)



* **PUT /api/v1/users/reflections/:id : for edit data user** _(if you have token in headers.authorization, to change data reflection user must input reflectionid in parameters)_ <br>
![6](https://user-images.githubusercontent.com/57614206/196035157-7aeee3d5-842c-4184-ad6c-a75a28ed1abd.png)



* **DELETE /api/v1/users/reflections/:id : for delete data user**  _(if you have token in headers.authorization, to delete data reflection user must input reflectionid in parameters)_ <br>
![7](https://user-images.githubusercontent.com/57614206/196035164-e86e6128-59e6-4364-a7ca-6aad456efd5d.png)

