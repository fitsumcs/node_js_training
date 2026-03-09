// Adding two numbers 
import { DIVIDE_BY_TWO } from './constant.js'
function addition(a,b)
{
    return a + b;
}
//sub
function subtraction(a,b)
{
    return a - b;
}
export function testModeulExportAndFunctions()
{

const res1 = addition(12,12);
const res2 = subtraction(12,6);
// ..reset of function calls 


console.log("The Sum is : " , res1);
console.log("The Sub is : ", res2 );
// ...rest of outputs 

}



