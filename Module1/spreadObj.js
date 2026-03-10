import { listOfNumbersOne, listOfNumbersTwo  } from "./mockData.js";

// Speread Obj
const listofNumumber = [...listOfNumbersOne, ...listOfNumbersTwo];

//Other Option -> Loop
export function testSpreadOpObj()
{
  console.log("Spread Operator Obj");
  console.log(listofNumumber);
}

