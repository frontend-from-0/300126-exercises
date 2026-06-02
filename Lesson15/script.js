// I rewrote the codes that we wrote in class.
//Ex.1

  function checkPassword(password){
    if (typeof password !== "string"){
      console.log("Please provide a string value")
      return;
    }
    if (password.length>=8){
      console.log("Password length is sufficient")
    } else {
      console.log("Password is too short")
    }
  }
  console.log("Ex.1");
  checkPassword("123456789");
  checkPassword("12345");
  checkPassword(124534);

//Ex.2

  function upperCaseName(name){
    if (typeof name !== "string"){
      console.log("Please provide a string value")
      return;
    }
    console.log(name.toUpperCase());
  }

  console.log("Ex.2");
  upperCaseName("murat kanbur");
  upperCaseName({name: "murat kanbur"});

//Ex.3

  function normalizeEmail(email){
    if (typeof email !== "string"){
      console.log("Please provide a string value")
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)){
      console.log(email.toLowerCase());
    } else {
      console.log("Invalid email format");
    }
  }

  console.log("Ex.3");
  normalizeEmail("USER@mail.com");
  normalizeEmail({email: "USER@mail.com"});  
  normalizeEmail("USERmail.com");

// Ex.4

function getDomain(email){
  if (typeof email !== "string"){
      console.log("Please provide a string value")
      return;
    } 
 const index = email.indexOf("@");
 const domain = email.substring(index+1);
 console.log(domain);
}
console.log("Ex.4")
getDomain("user@usertest.com");
getDomain();

//Ex.5

function containsWord(sentence, word){
  if (typeof sentence !== "string" || typeof word !== "string" ){
      console.log("Please provide a string value")
      return;
    } 
  if (sentence.includes(word)){
    console.log (`${word} found in sentence`)
  } else {
    console.log (`${word} not found in sentence`)
  }
}

console.log("Ex.5");
containsWord("Where are you?", "are");
containsWord("Where are you?", "is");
containsWord();

//Ex.6

function checkFileExtension (filename){
  if (typeof filename !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    if (filename.toLowerCase().endsWith(".PDF")){
      console.log("This is PDF file")
    } else {
      console.log ("This is not PDF file")
    }
}

console.log("Ex.6");
checkFileExtension("test.PDF");
checkFileExtension("test.JPEG");
checkFileExtension();


/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b){
  if (typeof a !== "number" || typeof b !== "number" ){
      console.log("Please provide a number value")
      return;
    } 
  if (a>b){
    console.log("a is bigger")
  } else if (b > a) {
    console.log("b is bigger")
  } else {
    console.log("Numbers are equal")
  }
}

console.log("Ex.7")
compareNumbers(3,7);
compareNumbers(8,2);
compareNumbers(4,4);
compareNumbers("d",7);


/*
8. (Palindrome Check) Compare Strings (case-insensitive)
   - Define a function `areEqualIgnoreCase(str1, str2)` that converts both strings
     to lowercase and checks if they are the same using ===.
   - If equal, log: "Strings are equal."
   - Otherwise, log: "Strings are not equal."
   - Call the function with pairs like ("Hello", "hello") and ("cat", "dog").
*/

function areEqualIgnoreCase(str1, str2){
  if (typeof str1 !== "string" || typeof str2 !== "string" ){
      console.log("Please provide a string value")
      return;
    } 

  const newStr1 = String(str1).toLowerCase()
  const newStr2 = String(str2).toLowerCase()
  
  if (newStr1 === newStr2){
    console.log("Strings are equal.")
  } else {
    console.log ("Strings are not equal.")
  }
}

console.log("Ex.8")
areEqualIgnoreCase("Hello", "hello");
areEqualIgnoreCase("cat", "dog");
areEqualIgnoreCase();



/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

function truncateString(text, maxLength){
  if (typeof text !== "string" || typeof maxLength !== "number"){
      console.log("Please provide a true value")
      return;
    } 
    if (text.length <= maxLength){
      console.log(text)
    }else {
      console.log((text.slice(0, maxLength) + "..."))
    }
}

console.log("Ex.9")
truncateString("navigation", 3);
truncateString("dog", 5);
truncateString("cat", "dog");

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number){
   if (typeof number !== "number"){
      console.log("Please provide a number value")
      return;
    } 
    if (number %2 === 0){
      console.log(`${number} is even`)
    } else {
      console.log(`${number} is odd`)
    }
}

console.log("Ex.10");
evenOrOdd(5);
evenOrOdd(6);
evenOrOdd("a");

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (typeof url !== "string"){
      console.log("Please provide a string value")
      return;
    } 

  if (url.toLowerCase().startsWith("https")){
    console.log("Secure connection")
  } else {
    console.log("Unsecure connection")
  }
}

console.log("Ex.11")
checkProtocol("https//wwww.test.com")
checkProtocol("wwww.test.com")
checkProtocol()

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
  if (typeof num !== "number"){
      console.log("Please provide a number value")
      return;
    } 
  switch (num){
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
    console.log("Invalid day")
}
}

console.log("Ex.12")
getDayOfWeek(3);
getDayOfWeek(9);
getDayOfWeek("f");


/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times){
  if (typeof word !== "string" || typeof times !== "number"){
      console.log("Please provide a true value")
      return;
    } 
    console.log(word.repeat(times));
}

console.log("Ex.13")
repeatWord("test ", 4);
repeatWord("test", "j");

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/


//I didn't this pratice. I received help from ai.
function censorWord(sentence, target){
  if (typeof sentence !== "string" || typeof target !== "string"){
      console.log("Please provide a string value")
      return;
    } 

    const newSentence = sentence.replace(target, "****")
    console.log(newSentence);
}

console.log("Ex.14")
censorWord("I am Murat", "Murat");
censorWord();


/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str){
  if (typeof str !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    if (str.toUpperCase().charAt(0) === "A"){
      console.log("Starts with A")
    } else {
      console.log("Does not start with A")
    }
}

console.log("Ex.15")
startsWithA("Apple");
startsWithA("angel");
startsWithA("Banana");
startsWithA(123);

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n){
  if (typeof text !== "string" || typeof n !== "number"){
      console.log("Please provide a true value")
      return;
    } 
    if (n === 0) {
      console.log("");
      return;
    }
    const result = text.slice(-n);
    console.log(result);
}

console.log("Ex.16");
sliceLastN("How are you?", 4);
sliceLastN("How are you?", 0);
sliceLastN("How are you?", "ab");

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

function gradeChecker(score){
   if (typeof score !== "number"){
      console.log("Please provide a number value")
      return;
    } 
  switch(true){
    case score<60:
      console.log("E");
      break;
    case 60<=score && score<=69:
      console.log("D");
      break;
    case 70<=score && score<=79:
      console.log("C");
      break;
    case 80<=score && score<=89:
      console.log("B");
      break;
    case score>=90:
      console.log("A");
  }
}

console.log("Ex.17")
gradeChecker(45);
gradeChecker(65);
gradeChecker(80);
gradeChecker(90);
gradeChecker();

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar){
  if (typeof str !== "string" || typeof oldChar !== "string" || typeof newChar !== "string"  ){
      console.log("Please provide a string value")
      return;
    } 

    const newStr = str.replaceAll(oldChar, newChar)
    console.log(newStr);
}

console.log("Ex.18")
replaceCharacter("Funny", "n", "m");
replaceCharacter("Funny", 3, "m");


/*
19. Capitalize First Letter
   - Define a function `capitalizeFirst(text)` that:
     - Uses charAt(0) (or [0]) and toUpperCase() for the first character
     - Uses slice(1) for the rest of the string (unchanged)
     - Returns or logs the combined result
   - Example: "hello world" -> "Hello world"
   - Log the result for at least two different strings.
*/

function capitalizeFirst(text){
   if (typeof text !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    let newText = text.charAt(0).toUpperCase();
        newText += text.slice(1);
        console.log(newText)
}

console.log("Ex.19")
capitalizeFirst("how are you?");
capitalizeFirst("it is an apple");
capitalizeFirst(123);


/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

function trafficLight(color) {
  if (typeof color !== "string"){
      console.log("Please provide a string value")
      return;
    } 
  switch(color){
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
      console.log("Invalid color")
  }
}

console.log("Ex.20");
trafficLight("red");
trafficLight("yellow");
trafficLight("blue");
trafficLight(123);


/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str){
  if (typeof str !== "string"){
      console.log("Please provide a string value")
      return;
    } 

    if (str.length > 10){
      console.log("Long string")
    } else {
      console.log("Short string")
    }
}

console.log("Ex.21");
isLongString("Murat");
isLongString("Murat Kanbur");
isLongString(1234);
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text){
   if (typeof text !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    const newText = text.toLowerCase()
    if (newText.includes("spam")){
      console.log("This text is spam.")
    } else {
      console.log("This text is not spam.")
    }
}

console.log("Ex.22");
isSpam("it is SPAM");
isSpam("Email sent")
isSpam("it is spAm");
isSpam(123);

/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/

function getTwoPartInitials(fullName){
   if (typeof fullName !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    let newFullName = fullName.split(" ");
    let words = newFullName[0].charAt(0) + "." + newFullName[1].charAt(0) + ".";
    let result = words.toUpperCase();
        console.log(result);
}

console.log("Ex.23");
getTwoPartInitials("murat kanbur");


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
  if (typeof monthNum !== "number"){
      console.log("Please provide a number value")
      return;
    } 
    switch(monthNum){
      case 12:
      case 1:
      case 2:
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
        console.log("Invalid month")
    }
}

console.log("Ex.24");
getSeason(24);
getSeason("5");
getSeason(4);


/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/

function containsNumber(str){
   if (typeof str !== "string"){
      console.log("Please provide a string value")
      return;
    } 
  if (str.match(/\d/)){
    console.log("Contains number")
  } else {
    console.log("No number found")
  } 
}
console.log("Ex.25");
containsNumber("room 5");
containsNumber("room");
containsNumber(1223);


/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

//I didn't this pratice. I received help from ai.
function padString(str, maxLength){
    if (typeof str !== "string" || typeof maxLength !== "number"){
      console.log("Please provide a true value")
      return;
    } 
    let result = str;
    if (str.length < maxLength){
      result = str.padEnd(maxLength, "*")
    }
    console.log(result);
}

console.log("Ex.26");
padString("3412", 8);
padString("3412", "8");

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age){
   if (typeof age !== "number"){
      console.log("Please provide a number value")
      return;
    } 
    if (age>=18){
      console.log("Can vote");
    } else {
      console.log("Too young to vote")
    }
}

console.log("Ex.27");
canVote("14");
canVote(22);
canVote(14);
canVote();


/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/

function reverseString(text){
  if (typeof text !== "string"){
      console.log("Please provide a string value")
      return;
    } 
    let newText = text.split("").reverse().join("");
    console.log(newText);
}

console.log("Ex.28");
reverseString("What");
reverseString(12243);


/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string" ){
      console.log("Please provide a string value")
      return;
    } 

    const position = sentence.indexOf(word);
    if (position === -1){
      console.log("Not found")
    } else {
      console.log(`The position of "${word}" is: ${position}`);
    }
}

console.log("Ex.29");
findWordPosition("I read a book", "book");
findWordPosition("I read a book", 123);

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
  if (typeof a !== "number" || typeof operator !== "string" || typeof b !== "number"){
      console.log("Please provide a string value")
      return;
    } 
  switch(operator){
    case "+":
      console.log("a + b");
      break;
    case "-":
      console.log("a - b");
      break;
    case "*":
      console.log("a * b");
      break;
    case "/":
      console.log("a / b");
      break;
    default:
      console.log("Invalid operator");
  }
}

console.log("Ex.30");
calculate(4, "+", 6);
calculate(4, "+", "6");
calculate(4, "%", 6);

