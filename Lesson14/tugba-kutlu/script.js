// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
// CODE HERE

const divisionDividendAmount = 10;
const divisionDivisorAmount = 3;
const divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
const subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log("Ex.18: Division of 10 and 3 is:", divisionQuotient)
console.log("Ex.18: Subtraction of 10 and 3 is:", subtractionDifference)


// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
// CODE HERE

const applicantFirstName = "Tugba";
const applicantLastName = "Kutlu";
const applicantFullName = applicantFirstName + " " + applicantLastName;
console.log(`Ex.19: Applicant Full Name is: ${applicantFullName}`)

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
// CODE HERE

const productFactorSeven = 7;
const productFactorTwo = 2;
console.log(`Ex.20: Product 7 and 2 is: ${productFactorSeven * productFactorTwo}`)

// 21. Log the value of Math.PI.
// CODE HERE

console.log("Ex.21: value of PI is:", Math.PI)

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
// CODE HERE

let demonstrationCounter = 0;
console.log(`Ex.22: I use this (+=) method: ${demonstrationCounter += 1}`)
console.log(`Ex.22: I use this (++) method: ${++demonstrationCounter}`)
console.log(`Ex.22: I use this (=+1) method: ${demonstrationCounter=demonstrationCounter+1}`)


// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
// CODE HERE

let baselineCelsiusTemp = 20;
console.log(`Ex.23: Increased Baseline Celsius Temp by 5: ${baselineCelsiusTemp += 5}`)

// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
// CODE HERE

let valueForPrefixIncrement = 6;
console.log("Ex.24: I using prefix (++) operator:", ++valueForPrefixIncrement)

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
// CODE HERE

let valueForPostfixIncrement = 8;
console.log("Ex.24: I using postfix (++) operator:", valueForPostfixIncrement++)
console.log("Ex.24: Varaible after update", valueForPostfixIncrement)

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

let valueBeforeDoubleStep = -3;
const finalValue = (++valueBeforeDoubleStep) * 2;
console.log("Ex.26: Final value after increment and double:", finalValue)


// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
// CODE HERE

let prefixBaseValue = 2;
let addedNeighborValue = 3;
let totalValue = (++prefixBaseValue) + addedNeighborValue;
console.log("EX.27 Total value after increment prefix Base Value and added Neighbor Value", totalValue)