//Arrow functions 
const addArrowFun = (a,b) => a + b;
const subArrowFun = (a,b) => a - b;
const divArrowFun = (a,b) => a * b;
const multArrowFun = (a,b) => a / b;

// Test This functions 
export function testArrowFunction()
{
console.log("Adding with Arrow : ", addArrowFun(1,2));
console.log("Sub with Arrow : ", subArrowFun(1,2));
console.log("Divsion with Arrow : ", divArrowFun(4,2));
console.log("Mult with Arrow : ", multArrowFun(4,2));
}

