import { foodOrder  } from "./mockData.js";

// Obj rest
const { name, orderNumber, ...restofData } = foodOrder;

export function testRestOpObjs()
{
  console.log("Obj Rest Operator");
  console.log(name , orderNumber);
  console.log("The Rest of it");
  console.log(restofData);
}

