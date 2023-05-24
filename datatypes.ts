// Concepts different from Javascript in typescript Datatypes, Type Inference, Union and intersection types, Generics, Literal types

/* The Datatypes available in typescript are 
1. String
2. Number
3. Array
4. Boolean
5. enum
6. tuple
7. void
8. never
9. any
*/

// Example for the String Datatype
let str : string;
str = "Hello";
let newstr = str.toUpperCase()
console.log(newstr)

// Example for the Number Datatype
let num : number;
num = 34;
let newnum : string;
newnum = "34"
let result = parseInt(newnum)
console.log(typeof(result))

// Example of Boolean Datatype   //The default value of boolean datatype in languages like .net is false, but in ts it needs to be defined 
let isValid : boolean = false
console.log(!isValid)

// Example of Array datatype
let arr : string[];
// Another way of intialzing and array 
let anotherarr : Array<number>

anotherarr=[1,2,3,4,5]
// console.log(anotherarr)
const results = anotherarr.filter((num)=> num>2)
console.log(results)
const findresults = anotherarr.find((num)=> num === 3)
console.log(findresults)
const resultss = anotherarr.reduce((acc, num)=> acc + num)
console.log(resultss)

// Example of enum Datatypes
const enum Color{
    'Red',
    'Blue',
    'Green'
}

const c:Color = Color.Blue

// Example of Tuples Datatypes
let swapNumbers : [num1 : number, num2 : number];

function swapNumber (num1:number, num2:number):[number,number]{
    return [num2,num1]
}

let value = swapNumber(10,20)
console.log(value)

// Example of any Datatypes  //Try avoiding the any datatype
let department:any;
department = "String";
department = 34