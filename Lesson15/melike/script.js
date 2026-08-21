/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    console.log("Result7:","a is bigger");
  } else if (b > a) {
    console.log("Result7:","b is bigger");
  } else {
    console.log("Result7:", "Numbers are equal");
  }
}
compareNumbers(9, -9);
/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/
function areEqualIgnoreCase(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Result8:","Strings are equal.");
  } else {
    console.log("Result8:","Strings are not equal.");
  }
}
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
    const truncated = text.slice(0, maxLength) + "...";
    console.log("Result9:", truncated);
  } else {
    console.log("Result9:", text);
  }
}
truncateString("This is a long string", 10);
truncateString("Short", 10);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Result10:","Even");
  } else {
    console.log("Result10:","Odd");
  }
}
evenOrOdd(4);
evenOrOdd(7);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (url.toLowerCase().startsWith("https")) {
    console.log("Result11:","Secure connection");
  } else {
    console.log("Result11:","Unsecure connection");
  }
}
checkProtocol("https://www.example.com");
checkProtocol("http://www.example.com");
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
  switch (num) {
    case 1:
      console.log("Result12:","Monday");
      break;
    case 2:
      console.log("Result12:","Tuesday");
      break;
    case 3:
      console.log("Result12:","Wednesday");
      break;
    case 4:
      console.log("Result12:","Thursday");
      break;
    case 5:
      console.log("Result12:","Friday");
      break;
    case 6:
      console.log("Result12:","Saturday");
      break;
    case 7:
      console.log("Result12:","Sunday");
      break;
    default:
      console.log("Result12:","Invalid day");
  }
}
getDayOfWeek(3);
/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  const repeated = (word + " ").repeat(times).trim();
  console.log("Result13:", repeated);
}
repeatWord("Hello", 3);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  const censored = sentence.replaceAll(target, "****");
  console.log("Result14:", censored);
}
censorWord("This is a spam message and spam content is prohibited ", "spam");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === 'A' || str.charAt(0) === 'a') {
    console.log("Result15:","Starts with A");
  } else {
    console.log("Result15:","Does not start with A");
  }
}
startsWithA("Apple");
startsWithA("Bird");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const lastN = text.slice(-n);
  console.log("Result16:", lastN);
}
sliceLastN("Hello World!", 5);

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
  switch (true) {
    case score >= 90:
      console.log("Result17:", "A");
      break;
    case score >= 80:
      console.log("Result17:", "B");
      break;
    case score >= 70:
      console.log("Result17:", "C");
      break;
    case score >= 60:
      console.log("Result17:", "D");
      break;
    default:
      console.log("Result17:", "F");
  }
}
gradeChecker(82);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  const replaced = str.replaceAll(oldChar, newChar);
  console.log("Result18:", replaced);
}
replaceCharacter("hello world", "l", "y");
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
  if (text.length === 0) {
    console.log("Result19:", "Empty string");
    return;
  }
  const firstChar = text.charAt(0).toUpperCase();
  const restOfString = text.slice(1);
  const capitalized = firstChar + restOfString;
  console.log("Result19:", capitalized);
}
capitalizeFirst("hello world");
capitalizeFirst("i am Melike");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Result20:", "Stop");
      break;
    case "yellow":
      console.log("Result20:", "Caution");
      break;
    case "green":
      console.log("Result20:", "Go");
      break;
    default:
      console.log("Result20:", "Invalid color");
  }
}
trafficLight("red");
trafficLight("yellow");
trafficLight("green");
trafficLight("blue");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (str.length > 10) {
    console.log("Result21:", "Long string");
  } else {
    console.log("Result21:", "Short string");
  }
}
isLongString("Longer than ten");
isLongString("A short");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("Result22:", "This text is spam.");
  } else {
    console.log("Result22:", "This text is not spam.");
  }
}
isSpam("This is a sPAm message");
isSpam("This is a not SPaM message");

/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
  const parts = fullName.split(" ");
  const firstInitial = parts[0].charAt(0).toUpperCase();
  const secondInitial = parts[1].charAt(0).toUpperCase();
  console.log("Result23:", `${firstInitial}.${secondInitial}.`);
}
getTwoPartInitials("melike diktepe");
getTwoPartInitials("Anna atalay");

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
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Result24:", "Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Result24:", "Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Result24:", "Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Result24:", "Autumn");
      break;
    default:
      console.log("Result24:", "Invalid month");
  }
}
getSeason(12);
getSeason(3);
getSeason(6);
getSeason(9);
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
function containsNumber(str) {
  if (/\d/.test(str)) {
    console.log("Result25:", "Contains number");
  } else {
    console.log("Result25:", "No number found");
  }
}
containsNumber("hello");
containsNumber("room -1");
containsNumber("abc123");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  console.log("Result26:", str.padEnd(maxLength, '*'));
}
padString("hello", 10);
padString("all", 10);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Result27:", "Can vote");
  } else {
    console.log("Result27:", "Too young to vote");
  }
}
canVote(20);
canVote(16);

/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
  // const reversed = text.split("").reverse().join("");
  // console.log("Result28:", reversed);
  console.log("Result28:", text.split("").reverse().join(""));
}
reverseString("hello");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log("Result29:", index);
  } else {
    console.log("Result29:", "Not found");
  }
}
findWordPosition("The quick brown fox jumps over the lazy dog", "fox");
findWordPosition("The quick brown fox jumps over the lazy dog", "cat");
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
  switch (operator) {
    case "+":
      console.log("Result30:", a + b);
      break;
    case "-":
      console.log("Result30:", a - b);
      break;
    case "*":
      console.log("Result30:", a * b);
      break;
    case "/":
      console.log("Result30:", a / b);
      break;
    default:
      console.log("Result30:", "Invalid operator");
  }
}
calculate(6, "+", 3);
calculate(6, "-", 3);
calculate(6, "*", 3);
calculate(6, "/", 3);
calculate(6, "%", 3);
