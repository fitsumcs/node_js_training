import { listOfNumbersOne, listOfNumbersTwo  } from "./mockData.js";

// Speread Array
// This operator merges various list to one
// Same applies for objs
const listofNumumber = [...listOfNumbersOne, ...listOfNumbersTwo];

// 1. Do this for Object 
// 2. Create a funcntion that accepts n number of params and give the summation 
// 1, 2, 3, ... [Sum]

//Other Option -> Loop
export function testSpreadOpArray()
{
  console.log("Spread Operator Array");
  console.log(listofNumumber);
}

