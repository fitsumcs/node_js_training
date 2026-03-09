// const mathLib = require('./mathfunc');  // Old way ES5
import { addition, subtraction } from './mathfunces6.js';
import { listofItems, userData }  from './mockData.js'
import { DIVIDE_BY_TWO }  from './constant.js'
 
// console.log("This is Node Js Training..");
// console.log("This Is module 1 ");

const res1 = addition(12,12);
const res2 = subtraction(12,6);
// ..reset of function calls 

console.log("The Sum is : " , res1);
console.log("The Sub is : ", res2 );
// ...rest of outputs 

//Other Data
console.log("The Constant is" , DIVIDE_BY_TWO);
console.log("List of items: ", listofItems);
console.log("User Data : ", userData);




