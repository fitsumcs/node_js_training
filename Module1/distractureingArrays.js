import { listofItems } from "./mockData.js";

//Assigne them to vairable 
// const apple = listOfItems[0];
// const oragne = listOfItems[1];
// const pinaple = listOfItems[2];

// with distrcturing
const [ apple, oragne, pinaple ] = listofItems;

export function testDistractiringArrays()
{
  console.log("Array Distracturing");
  console.log(apple , oragne, pinaple);

}

