# MyApp

This is Angular project. In short, in Angular development it's always popular SOLID principles, but in another abstract, for example instead of Dependency Inversion, we use Dependency Injection.


1) SRP

![image](https://github.com/barakov14/assignment-2/assets/130334733/c8493e8d-c0a7-44ab-bc99-b2be1dfa30ce)
in this image, there are files. In files we have classes, and each classes has their own responsibility. Like Container Component is smart component for fetching data and giving data for stupid components by using Input or Output decorators.
![image](https://github.com/barakov14/assignment-2/assets/130334733/27248f16-eec7-4338-9815-d21018b563c7)

We have CatalogService class for http requests
![image](https://github.com/barakov14/assignment-2/assets/130334733/538be38c-75c1-4d2d-8047-c1eb35cd7d11)

So it proves, that all classes have their own responsibility - Single Responsibility

2) Open/Closed principle

![image](https://github.com/barakov14/assignment-2/assets/130334733/9d9e61f7-e43a-49d0-bf43-2715d82696db)
in this image in this class, we can scale, but we can't rights to changing smth by following Open/Closed Principle

3) LSP
![image](https://github.com/barakov14/assignment-2/assets/130334733/5b84018b-80ec-4f9f-b752-47549bd4c5e0)

We need to ensure that any implementation of the Catalog and Item interfaces can be safely substituted for their base interfaces without altering the correctness of the program.

For the Catalog interface, any class implementing it should provide the items property, which is an array of objects conforming to the Item interface. Similarly, any class implementing the Item interface should provide the name and type properties.

4) ISP
For exampe we have adapters and ViewModel

![image](https://github.com/barakov14/assignment-2/assets/130334733/0680be5d-133b-4bc3-9843-9c20cde48b94)


Why adapter? Because if we have in interface so much atributes, but in component will be displayed some atributes, not all, so in this case we use adapters for taking atributes which we need to show in Component
Adapter:
![image](https://github.com/barakov14/assignment-2/assets/130334733/69327e55-3c34-456a-be8d-59ff6445a899)

VM which we need to show in component

![image](https://github.com/barakov14/assignment-2/assets/130334733/a3a5f458-4571-4996-95d8-cfd190204bcf)


5) Dependency Injection(Dependency Inversion)
So we injecting dependency, like CatalogService to use their methods and read properties like catalog$.
![image](https://github.com/barakov14/assignment-2/assets/130334733/af189b11-5bc4-4a42-a3c2-828677867c40)

and another example

![image](https://github.com/barakov14/assignment-2/assets/130334733/2687239b-4c7a-4ef6-be18-3bea26b365e4)


![image](https://github.com/barakov14/assignment-2/assets/130334733/013ed97c-8ac5-43d5-a4fc-a214f0eeefd6)

![image](https://github.com/barakov14/assignment-2/assets/130334733/af3797a0-2037-4e16-bc85-c67724bdea4a)

We injecting dependency, so in this case it's API url, and we providing this injection token, and all services for http requests uses this api url

