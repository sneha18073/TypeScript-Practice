import { Login, User } from "./interfaces"

interface Address{
    city: string
    state: string
    country: string
}

class Employee implements Login{
    id: number
    name: string
    address: Address
    constructor(id: number, name: string, address: Address) {
        this.id = id
        this.name = name
        this.address = address
    }
    login(): User {
        return {id:12, name:"sne", age:100, email:""}
    }
    getEmployeeSalary(): string {
        return `${this.name} stays at ${this.address}`
    }
    get empId(): number {
        return this.id
    }
    set empId(id: number) {
        this.id = id
    }
    static getEmployeeCount():number{
        return 404
    }
}

class Manager extends Employee{
    constructor(id:number, name:string, address:Address){
        super(id,name,address)
    }
    getEmployeeSalary(): string {
        return `${this.name} is a Manager who stays at ${this.address}`
    }
}

let sneha = new Employee(1, "sneha", {city:"mysuru", state:"karnataka",country: "india"})
console.log(sneha.getEmployeeSalary())
sneha.empId = 500
console.log(sneha.empId)
// Can be assigned to the class name itself if a constructor method id declared using static keyword
Employee.getEmployeeCount

// let man = new Manager(203, "Sneha N", "Mysuru Karnataka")
// console.log(man.getEmployeeSalary())