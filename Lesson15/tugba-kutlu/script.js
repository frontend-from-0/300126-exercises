/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    console.log("Please enter a valid value");
    return;
  }
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
  }
}
console.log("Ex-7");
compareNumbers(3, 8);

/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/
function areEqualIgnoreCase(str1, str2) {
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();
  if (lowerStr1 === lowerStr2) {
    console.log("Strings are equal.");
  } else {
    console.log("Strings are not equal.");
  }
}
console.log("\nEx-8");
areEqualIgnoreCase("Hello", "hello");
areEqualIgnoreCase("cat", "dog");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    let truncate = text.slice(0, maxLength);
    console.log(truncate + "...");
  } else console.log(text);
}
console.log("\nEx-9");
truncateString("I'm learning write code", 9);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (typeof number !== "number") {
    console.log("Enter a valid number");
    return;
  }
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
console.log("\nEx-10");
evenOrOdd(16);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log("Enter a valid URL");
    return;
  }
  if (url.toLowerCase().startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
console.log("\nEx-11");
checkProtocol("hsdsdhshbs");
checkProtocol("https://chatgpt.com/");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
function getDayOfWeek(num) {
  if (typeof num !== "number") {
    console.log("Enter a valid number");
    return;
  }

  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day");
  }
}
console.log("\nEx-12");
getDayOfWeek(4);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  if (typeof word !== "string" || typeof times !== "number") {
    console.log("Enter a valid value");
    return;
  }
  console.log(word.repeat(times));
}
console.log("\nEx-13");
repeatWord("flower", 4);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  if (typeof sentence !== "string" || typeof target !== "string") {
    console.log("Enter a valid value");
    return;
  }
  console.log(sentence.replaceAll(target, "******"));
}
console.log("\nEx-14");
censorWord("She love reading Book.", "love");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (str.charAt(0) == "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
console.log("\nEx-15");
startsWithA("Angel");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  if (typeof text !== "string" || typeof n !== "number") {
    console.log("Enter a valid value");
    return;
  }
  console.log(text.slice(-n));
}
console.log("\nEx-16");
sliceLastN("Shark can't run.", 6);

/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/

function gradeChecker(score) {
  if (typeof score !== "number") {
    console.log("Enter a valid number");
    return;
  }
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
console.log("\nEx-17");
gradeChecker(78);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
  if (
    typeof str !== "string" ||
    typeof oldChar !== "string" ||
    typeof newChar !== "string"
  ) {
    console.log("Enter a valid value");
    return;
  }
  console.log(str.replaceAll(oldChar, newChar));
}
console.log("\nEx-18");
replaceCharacter("Little boy catches a fish", "b", "t");

/*
19. Capitalize First Letter
   - Define a function `capitalizeFirst(text)` that:
     - Uses charAt(0) (or [0]) and toUpperCase() for the first character
     - Uses slice(1) for the rest of the string (unchanged)
     - Returns or logs the combined result
   - Example: "hello world" -> "Hello world"
   - Log the result for at least two different strings.
*/

function capitalizeFirst(text) {
  if (typeof text !== "string") {
    console.log("Enter a valid value");
    return;
  }
  let firstLetter = text.charAt(0).toUpperCase();
  let afterFirstLetter = text.slice(1);
  console.log("\nEx-19", firstLetter + afterFirstLetter);
}
capitalizeFirst("hello world");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  if (typeof color !== "string") {
    console.log("Enter a valid value");
    return;
  }
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
  }
}
console.log("\nEx-20");
trafficLight("yellow");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (str.length >= 10) {
    console.log("Long String");
  } else {
    console.log("Short string");
  }
}
console.log("\nEx-21");
isLongString("Tarçın sleep all day");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (typeof text !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (text.toLowerCase().includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
console.log("\nEx-22");
isSpam("this picture had spam.");

/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/

function getTwoPartInitials(fullName) {
  if (typeof fullName !== "string") {
    console.log("Enter a valid value");
    return;
  }
  let firstLetters = fullName.split(" ");
  console.log(
    firstLetters[0].charAt(0).toUpperCase() +
      "." +
      firstLetters[1].charAt(0).toUpperCase() +
      ".",
  );
}
console.log("\nEx-23");
getTwoPartInitials("tuğba kutlu");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/

function getSeason(monthNum) {
  if (typeof monthNum !== "string") {
    console.log("Enter a valid value");
    return;
  }
  switch (monthNum) {
    case 1:
    case 2:
    case 12:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
  }
}
console.log("\nEx-24");
getSeason(12);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/

function containsNumber(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
console.log("\nEx.25:");
containsNumber("hello");
containsNumber("room 5");
containsNumber("abc123");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, "*"));
  } else {
    console.log(str);
  }
}
console.log("\nEx.26:");
padString("Greengables", 17);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (typeof age !== "number") {
    console.log("Enter a valid value");
    return;
  }
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
console.log("\nEx.27:");
canVote(12);

/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
  if (typeof text !== "string") {
    console.log("Enter a valid value");
    return;
  }
  console.log(text.split("").reverse().join(""));
}
console.log("\nEx.28:");
reverseString("hello");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  if (typeof sentence !== "string") {
    console.log("Enter a valid value");
    return;
  }
  if (sentence.indexOf(word) >= 0) {
    console.log(sentence.indexOf(word));
  } else {
    console.log("Not found");
  }
}
console.log("\nEx.29:");
findWordPosition("Pride and Prejudice my favorite book.", "Prejudice");
findWordPosition("Pride and Prejudice my favorite book.", "love");

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
function calculate(a, operator, b) {
  if (
    typeof a !== "number" ||
    typeof operator !== "string" ||
    typeof b !== "number"
  ) {
    console.log("Enter a valid value");
    return;
  }
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operator");
  }
}
console.log("\nEx.30:");
calculate(9, "+", 5);
