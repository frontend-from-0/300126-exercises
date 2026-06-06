// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
// CODE HERE
const divisionDividendAmount = 10;
const divisionDivisorAmount = 3;
const divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
const subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log(`Ex.18: Division result of ${divisionDividendAmount} / ${divisionDivisorAmount} is ${divisionQuotient}, and the subtraction result is ${subtractionDifference}`);

// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
// CODE HERE
let applicantFirstName = "Orhan";
let applicantLastName = "Ayhan";
const applicantFullName = applicantFirstName + " " + applicantLastName;
console.log(`Ex.19: Full Name of applicant is : \"${applicantFullName}\"`)
// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
// CODE HERE
function factorial(numberForFactorial){
  let result = 1;
  for(let i = 1; i <= numberForFactorial; i++){
    result *= i
  }
  return result;
}
function multiplyFactorial(a, b){
  return factorial(a) * factorial(b);
}
console.log(`Ex.20: (I get it wrong, i did the factorial...) Multiply factorial of 7 and 2  is: ${multiplyFactorial(7, 2)}`)

const productFactorSeven=7;
const productFactorTwo = 2;
console.log(`Ex.20: (The right answer) Multiply of 7 and 2 is: ${productFactorSeven * productFactorTwo}`);
// 21. Log the value of Math.PI.
// CODE HERE
console.log(`Ex.21: Pi is: ${Math.PI}`)

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// CODE HERE
let demonstrationCounter = 0;
console.log(`Ex.22: Initial value: ${demonstrationCounter}, after postfix increment (counter++): ${demonstrationCounter++}, after += 1: ${demonstrationCounter += 1}, after counter = counter + 1: ${demonstrationCounter = demonstrationCounter + 1}`);


// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
// CODE HERE
let baselineCelsiusTemp=20;
console.log(`Ex.23: Increasing tempature: ${baselineCelsiusTemp += 5}`)

// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
// CODE HERE
let valueForPrefixIncrement = 6;
console.log(`Ex.24: Before prefix increment: ${valueForPrefixIncrement}, after prefix increment: ${++valueForPrefixIncrement}`);

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// CODE HERE
let valueForPostfixIncrement = 8;
console.log("Ex.25: Value before postfix increment: " + valueForPostfixIncrement++ + ", value after postfix increment: " + valueForPostfixIncrement);

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
let valueBeforeDoubleStep = -3;
console.log("Ex.26: " + ++valueBeforeDoubleStep * 2);

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// CODE HERE
let prefixBaseValue=2;
const addedNeighborValue=3;
let newNumbersEx27 = ++prefixBaseValue + addedNeighborValue;
console.log("Ex.27: After prefix increment and adding neighbor value, the result is: " + newNumbersEx27);
