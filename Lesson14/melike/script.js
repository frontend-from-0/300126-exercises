// 18. Declare divisionDividendAmount=10 and divisionDivisorAmount=3. Log the quotient as divisionQuotient and the subtraction difference (divisionDividendAmount - divisionDivisorAmount) as subtractionDifference.
const divisionDividendAmount = 10;
const divisionDivisorAmount = 3;
const divisionQuotient = divisionDividendAmount / divisionDivisorAmount;
const subtractionDifference = divisionDividendAmount - divisionDivisorAmount;
console.log("Result 18:" ,"divisionQuotient:", divisionQuotient,"subtractionDifference:", subtractionDifference);

// 19. Declare applicantFirstName and applicantLastName. Create applicantFullName by concatenating them with a space and log applicantFullName.
const applicantFirstName = "John";
const applicantLastName = "Doe";
const applicantFullName = `${applicantFirstName} ${applicantLastName}`;
console.log("Result 19:", "Applicant Full Name:", applicantFullName);

// 20. Declare productFactorSeven=7 and productFactorTwo=2. Log the product of productFactorSeven and productFactorTwo.
const productFactorSeven = 7;
const productFactorTwo = 2;
const product = productFactorSeven * productFactorTwo;
console.log("Result 20:", "product:", product);

// 21. Log the value of Math.PI.
console.log("Result 21:", "Math.PI:", Math.PI);

// 22. Declare demonstrationCounter=0. Increment it using three different methods (e.g., demonstrationCounter++, demonstrationCounter+=1, demonstrationCounter=demonstrationCounter+1) and log the result each time.
let demonstrationCounter = 0;
demonstrationCounter++;
console.log("Result 22_1:", "demonstrationCounter++:", demonstrationCounter);
demonstrationCounter += 1;
console.log("Result 22_2:", "demonstrationCounter+=1:", demonstrationCounter);
demonstrationCounter = demonstrationCounter + 1;
console.log("Result 22_3:", "demonstrationCounter+1:", demonstrationCounter);

// 23. Declare baselineCelsiusTemp=20. Increase it by 5 and log the result.
let baselineCelsiusTemp = 20;
baselineCelsiusTemp += 5;
console.log("Result 23:", "Baseline Celsius Temp:", baselineCelsiusTemp); 

// 24. Declare valueForPrefixIncrement=6. Increment it using the prefix ++ operator and log both the expression result and the variable after the update, as appropriate for prefix ++.
let valueForPrefixIncrement = 6;
console.log("Result 24_1:", "Expression result (Prefix):", ++valueForPrefixIncrement); 
console.log("Result 24_2:", "Variable after update:", valueForPrefixIncrement);

// 25. Declare valueForPostfixIncrement=8. Increment it using the postfix ++ operator and log both the expression result and the variable after the update, as appropriate for postfix ++.
let valueForPostfixIncrement = 8;
console.log("Result 25_1:", "Expression result (Postfix):", valueForPostfixIncrement++); 
console.log("Result 25_2:", "Variable after update:", valueForPostfixIncrement);

// 26. Declare valueBeforeDoubleStep=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let valueBeforeDoubleStep = -3;
const finalValue26 = (++valueBeforeDoubleStep) * 2;
console.log("Final Value 26:", finalValue26);

// 27. Declare prefixBaseValue=2 and addedNeighborValue=3. Increment prefixBaseValue using the prefix ++ operator, then add addedNeighborValue to the result and log it.
let prefixBaseValue = 2;
const addedNeighborValue = 3;
const finalResult27 = (++prefixBaseValue) + addedNeighborValue;
console.log("Final Result 27:", finalResult27);
