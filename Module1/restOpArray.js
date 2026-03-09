import { listOfNumbersOne } from "./mockData.js";

// with distrcturing
const [ one, two, ...restofNumbers ] = listOfNumbersOne;

export function testRestOpArrays()
{
  console.log("Array Rest Operator");
  console.log(one , two);
  console.log("The Rest of it");
  console.log(restofNumbers);
  console.log(typeof restofNumbers);
  
  

}

