// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
// CODE HERE
let divisionDividendAmount = 10;
let divisionDivisorAmount = 3;

let divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
let subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
let divisionMinRound = Math.floor(divisionQuotient);
console.log(divisionQuotient, subtractionDifference);
console.log(divisionMinRound);
// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
// CODE HERE

let applicantFirstName = "Berk";
let applicantLastName = "Cam";
let applicantFullName = "Berk " + "Cam"; // we can also use let applicantFullName =`Berk Cam`; or let applicantFullName = `${applicantFirstName} ${applicantLastName}`;

console.log(applicantFullName);

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
// CODE HERE

let productFactorSeven = 7;
let productFactorTwo = 2;
let resultProduct = productFactorSeven * productFactorTwo;

console.log(resultProduct);

// 21. Log the value of Math.PI.
// CODE HERE

let piNumber = Math.PI;
console.log(piNumber);

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// CODE HERE

let demonstrationCounter = 0;
demonstrationCounter++;
demonstrationCounter += demonstrationCounter;
demonstrationCounter = demonstrationCounter + 1;
console.log(demonstrationCounter);
// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
// CODE HERE
let baselineCelsiusTemp = 20;

baselineCelsiusTemp = baselineCelsiusTemp + 5;
console.log(baselineCelsiusTemp);

// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
// CODE HERE

let valueForPrefixIncrement = 6;

let result1 = ++valueForPrefixIncrement;
console.log(result1);
console.log(valueForPrefixIncrement);
// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// CODE HERE

let valueForPostfixIncrement = 8;
let result2 = valueForPostfixIncrement++;
console.log(result2);
console.log(valueForPostfixIncrement);

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

let valueBeforeDoubleStep = -3;
let result3 = ++valueBeforeDoubleStep;
let finalResult = result3 * 2;
console.log(finalResult);

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// CODE HERE

let prefixBaseValue = 2;
let addedNeighborValue = 3;

console.log(++prefixBaseValue + addedNeighborValue);
