import { sum } from "../../src/utils/sum";

describe("Sum Function (sum)", ()=>
{
  //scenarios
  // Scen 1
  it("Summation of postive number", ()=>
  {
    //Arrange [Data]
    const number1 = 12;
    const number2 = 12;
    const expcted = 24;

    //Act. -> Call the function
    const result = sum(number1, number2);

    //Assert
    expect(result).toBe(expcted);

  })

  //Scen 2
  it("Summation of negitive number", ()=>
  {
    //Arrange [Data]
    const number1 = -12;
    const number2 = -12;
    const expcted = -24;

    //Act. -> Call the function
    const result = sum(number1, number2);

    //Assert
    expect(result).toBe(expcted);

  })


})