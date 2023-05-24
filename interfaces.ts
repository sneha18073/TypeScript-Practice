export interface User{
    id: number
    name: string
    age?: number  //This makes the parameter optional, this is often used while writting the logic 
    email: string
}

interface userSalary extends User{
    salary?:number
}
// If we want to assign the parameters to a assigned role 
let {name:userName, email:userLogin}: User ={
    name:"Sne",
    email:"",
    id: 404
}
let employees : userSalary = {id:12, name:"sne", age:100, email:"", salary:45000}
// let users : User[]=
// Also can be assigned by destructing method
let [user1, user2, ...restUsers]: User[]=[
    {id: 1, name:"Sneha1", age:19, email:""},
    {id: 2, name:"Sneha2", age:18, email:""},
    {id: 3, name:"Sneha3", age:17, email:""},
    {id: 4, name:"Sneha4", age:16, email:""},
]

console.log(user1)
console.log(user2)
console.log(...restUsers)

export interface Login{
    login(): User
}


// Decorators in typeScript
// @Component is a type of decorator assigned by the angular, it is declasred befor the class is been specified
// class Component{}