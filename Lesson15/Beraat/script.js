/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
    console.log(`Ex.7:`)
    if (typeof a !== "number" || typeof b !== "number")   {
    console.log("Both parameters must be numbers")
    return; }
    if (a> b){
        console.log(`a is bigger`)
    } else if (b>a) {
        console.log(`b is bigger`)
    } else {
        console.log("Numbers are equal");
    }
}
compareNumbers(9,3);
compareNumbers(9,"3");
compareNumbers("nine",3);
compareNumbers(3,9);


/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/

function areEqualIgnoreCase(str1, str2) {
  console.log(`Ex.8:`)
  if (typeof str1 !== "string" || typeof str2 !== "string")   {
    console.log("Please provide a valid string")
    return;
  }
if (str1.toLocaleLowerCase() === str2.toLocaleLowerCase()) {
    console.log(`Strings are equal.`)
  }
  else {
    console.log(`Strings are not equal.`)
  }
}
areEqualIgnoreCase("BerAAt", "beraat");
areEqualIgnoreCase(1548, "beraat");
areEqualIgnoreCase(2358, 2358);


/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

function truncateString (text, maxLength){
  console.log(`Ex.9:`)
   if (typeof text !== "string" || typeof maxLength !== "number")   {
    console.log("Please provide a valid value")
    return;
  }
  if (text.length > maxLength) {
    console.log(text.slice(0,maxLength) +"...")
  }
  else {
    console.log(text)
  }
}
truncateString("Think of it as a magic box", 12);
truncateString("Think of it as a magic box", 50);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number){
  console.log("Ex.10:")
  if (typeof number !== "number"){
    console.log("Please provide a valid number")
    return;
  }
  if(number % 2 == 0) {
    console.log("Even")
  } else{
    console.log("Odd")
  }
}

evenOrOdd(15);
evenOrOdd("15");
evenOrOdd("fifteen");


/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url){
  console.log("Ex.11:")
  if (typeof url !== "string"){
    console.log("Please provide a valid URL");
    return;
  }
  if(url.toLowerCase().startsWith("https")){
    console.log("Secure connection")
  }else{
    console.log("Unsecure connection")
  }
}
checkProtocol("http://www.1323.com");
checkProtocol("https://www.1323.com");
checkProtocol(2345);


/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

function getDayOfWeek(num){
  console.log("Ex.12:")
   const weekDayNumber = parseInt(num);
   switch(weekDayNumber){
      case 1:
         return "Monday";
      case 2:
         return "Tuesday";
      case 3:
          return "Wednesday";
      case 4:
         return "Thursday";
      case 5:
         return "Friday";
      case 6:
         return "Saturday";
      case 7:
         return "Sunday";
      default:
         return "Invalid Day";
   }
}
console.log("Ex.12:");
console.log(getDayOfWeek(2));
console.log(getDayOfWeek(5));


/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
   console.log("Ex.13:")
  if (typeof times !== "number"){
    console.log("Please provide repeat number")
    return;
  }
  console.log(word.repeat(times))

} 

repeatWord("Beraat", 2);
repeatWord("ha", 12);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
   console.log("Ex.14:")
  if (typeof sentence !== "string" || typeof target !== "string"){
    console.log("Please provide a valid string")
    return;
  }
  console.log(sentence.replaceAll(target, "*".repeat(target.length)))
}

censorWord("there will be hard times and there will be easy ones", "be");
censorWord("there will be hard times and there will be easy ones", "there");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  console.log("Ex.15:")
  if (typeof str !== "string"){
    console.log("Please provide a valid string")
    return;
  }
  if (str[0] == "A") {
    console.log(`Starts with A`)
  } else {
    console.log(`Does not start with A`)
  }
}
startsWithA("Abdominal");
startsWithA("abdominal");
startsWithA("Progressive");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n){
  console.log("Ex.16:")
   if (typeof text !== "string" || typeof n !== "number"){
    console.log("Please provide a valid value")
    return;
  }
  console.log(`Last ${n} characters are "${text.slice(-n)}"`)
}

sliceLastN("a very long sentence", 8);
sliceLastN("a very long sentence", 5);
sliceLastN("a very long sentence", 11);
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
  console.log("Ex.17:");

  if (typeof score !== "number" || score > 100 || score < 0) {
    console.log("Please provide a valid number");
    return;
  }

  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}

gradeChecker(93);
gradeChecker(215);
gradeChecker(-8);
gradeChecker(50);
gradeChecker(78);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
   console.log("Ex.18:")
  if (typeof str !== "string" || typeof oldChar !== "string" || typeof newChar !== "string"){
    console.log("Please provide a valid string")
    return;
  }
  console.log(str.replaceAll(oldChar, newChar))
}

replaceCharacter("there will be hard times and there will be easy ones", "will be", "was");
replaceCharacter("there will be hard times and there will be easy ones", "there" , "here");

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
  console.log("Ex.19:");

  if (typeof text !== "string") {
    console.log("Please provide a valid string");
    return;
  }

  const result = text.charAt(0).toUpperCase() + text.slice(1);

  console.log(result);
}
capitalizeFirst("hello code2career");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

function trafficLight(color) {
  console.log("Ex.20:");
  switch (true) {
    case color == "red":
      console.log("Stop");
      break;
    case color == "yellow":
      console.log("Caution");
      break;
    case color == "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
  }
}
trafficLight("green");
trafficLight(412);

trafficLight("pink");

trafficLight("yellow");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str){
    console.log("Ex.21:");

  if (typeof str !== "string") {
    console.log("Please provide a valid string");
    return;
  }
  if (str.length > 10) {
    console.log(`Long string`)
  } else {
    console.log(`Short string`)
  }
}

isLongString(`I love coding more than playing video games`);
isLongString(`coding`);
isLongString(12345678901);
isLongString(1234);
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  console.log("Ex.22:");
  if (typeof text !== "string") {
    console.log("Please provide a valid string");
    return;
  }
  if (text.toLowerCase().includes("spam") == true){
    console.log(`This text is spam.`)}
    else {
      console.log(`This text is not spam.`)
    }
}
isSpam("is this a spam text?");
isSpam("we do not want any unnecessery thing here.");
isSpam("Spams are unnecessery entry.");
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName){
  console.log("Ex.23:");
  let firstNameInitial = fullName[0]
  let lastNameInitial = fullName[fullName.indexOf(' ') + 1]
  let result = firstNameInitial.toUpperCase() + "." + lastNameInitial.toUpperCase() + "."
  console.log(result)
}
getTwoPartInitials("beraat cakici");
getTwoPartInitials("code2 career");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/


function getSeason(monthNum){
   console.log("Ex.24:");

  const month = parseInt(monthNum);
   switch(month){
      case 1:
      case 2:
      case 12:
        return "Winter";
      case 4:
      case 5:
      case 3:
        return "Spring";
      case 6:
      case 7:
      case 8:
        return "Summer"
      case 9:
       case 10:
        case 11: 
        return "Autumn"      
      default:
         return "Invalid Month";
   }
}

console.log(getSeason(5));
console.log(getSeason("11"));
console.log(getSeason("three"));

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
function containsNumber(str) {
  console.log("Ex.25:");
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

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
  console.log("Ex.26:");
  if (str.length < maxLength) {
    let paddedString = str.padStart((str.length+(maxLength - str.length)/2) , "*").padEnd(maxLength, "*")
    console.log(paddedString)
  } else {
    console.log(str)
  }
}

padString("me", 10)
padString("beraat", 25)

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

function canVote(age) {
  console.log("Ex.27:");
  if ( age <0 || age > 120 ) {
    console.log("Please provide a valid number");
    return;
  }
  if (age >= 18) {
    console.log(`Can vote`)
  } else {
    console.log(`Too young to vote`)
  }
}

canVote("12")
canVote("24")
canVote(99)
canVote(-2)
canVote(302)
canVote("152")

/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/

function reverseString(text) {
  console.log("Ex.28:");
  if (typeof text !== "string") {
    console.log("Please provide a valid string");
    return;
  }
  let splitting = text.split("")
  console.log(`Splitted array is ${splitting}`)
  let reversing = splitting.reverse()
  console.log(`The reversed array is ${reversing}`)
  let reversed = reversing.join("")
  console.log(`Reversed text is ${reversed}`)
}
reverseString(23456);
reverseString("23456");
reverseString("beraat");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  console.log("Ex.29:");
  const index = sentence.indexOf(word);
/*indexof negative olursa -1 value döndürür*/
  if (index !== -1) {
    console.log(`Word starts at ${index}`);
  } else {
    console.log("Not found");
  }
}

findWordPosition("uzun bir cumle kuralım", "cumle");
findWordPosition("uzun bir cumle kuralım", "mle");
findWordPosition("uzun bir cumle kuralım", "m");
findWordPosition("uzun bir cumle kuralım", "fal");
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

function calculate(a, operator , b) {
   console.log("Ex.30:");
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(3,"*",6))
console.log(calculate(4,"-",12))
console.log(calculate("6","/","3"))
console.log(calculate(3,"+",6))
