import { userData } from "./mockData.js";

//Assigne them to vairable 
// const firsName = userData.firsName;
// const lastName = userData.lastName;
// const age = userData.age;

// with distrcturing
const { firsName : userFirstName, lastName, age } = userData;

export function testDistractiringObj()
{
  console.log("Object Distracturing");
  console.log(userFirstName , lastName, age);

}

