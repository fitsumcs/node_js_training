
// Speread Array
function SumNnumberOfNumber(...numbers)
{
  //Sum
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum;

}

//Multiplication 
function MulNnumberOfNumber(...numbers) // here
{
  const multiplication = numbers.reduce((a, b) => a + b, 1);  //Logic will be here
  return multiplication;
}


//Other Option -> Loop
export function testSumOfNumbers()
{
  console.log("Sum Of Numbers", SumNnumberOfNumber(1,2,3,4,4,4,4));
  console.log("Multipllicion Of Numbers", MulNnumberOfNumber(1,2,3,4,4,4,4));

}

