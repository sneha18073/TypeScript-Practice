/* Types of Functions in TypeScript
1. Optional Parameter
2. Rest Parameter
3. Generic Function
4. Required Parameter
*/

// Example for the Optional Parameter
const opt = function(num1:number, num2:number, num3?:number):number{
    return num3? num1+num2+num3 : num1+ num2;
}
console.log(opt(2,3))
console.log(opt(2,3,4))

// Example for the Required Parameter
const requ = function(num1:number, num2:number, num3=10):number{
    return num1 + num2 + num3
}
console.log(requ(2,3))
console.log(requ(2,3,4))

// Example for Rest Parameter
const restParm = function(num1:number, num2:number, ...num3:number[]):number{
    return num1+ num2+ num3.reduce((a,b)=>a+b,0)
} 
let numbers : number[];
numbers = [4,5,6,7,8];
console.log(restParm(2,3,...numbers))
console.log(restParm(2,3,4,5,6,7,8,9,12,34))

// Example sfor Generic Functions
function getItems<type>(items: type[]):type[]{
    return new Array<type>().concat(items)
}

const setItems = getItems(['a', 'b', 'c', 'd', 'e', 'f'])
const setItems2 = getItems([1,2,3,4,5,6])

console.log(setItems)
console.log(setItems2)