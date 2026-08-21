// 7. Compare Numbers (if-else)
function compareNumbers(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
  }
}
compareNumbers(5, 3);
compareNumbers(2, 8);
compareNumbers(4, 4);

// 8. Compare Strings (case-insensitive)
function areEqualIgnoreCase(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are equal.");
  } else {
    console.log("Strings are not equal.");
  }
}
areEqualIgnoreCase("Hello", "hello");
areEqualIgnoreCase("cat", "dog");

// 9. String Truncation
function truncateString(text, maxLength) {
  let result;
  if (text.length > maxLength) {
    result = text.slice(0, maxLength) + "...";
  } else {
    result = text;
  }
  console.log(result);
}
truncateString("JavaScript is fun", 10);

// 10. Check Even or Odd (if-else)
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(4);
evenOrOdd(7);

// 11. URL Protocol Checker
function checkProtocol(url) {
  if (url.toLowerCase().startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("https://example.com");
checkProtocol("http://example.com");

// 12. Switch: Day of the Week
function getDayOfWeek(num) {
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
getDayOfWeek(3);
getDayOfWeek(9);

// 13. Repeat a String
function repeatWord(word, times) {
  console.log(word.repeat(times));
}
repeatWord("Ha", 3);

// 14. Replace Substring
function censorWord(sentence, target) {
  console.log(sentence.replaceAll(target, "****"));
}
censorWord("This is bad word test", "bad");

// 15. Check First Character (if-else)
function startsWithA(str) {
   if (str.charAt(0).toUpperCase() === "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Apple");
startsWithA("Banana");

// 16. Slice Last N Characters
function sliceLastN(text, n) {
  console.log(text.slice(-n));
}
sliceLastN("JavaScript", 4);

// 17. Switch: Grade Checker
function gradeChecker(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(grade);
}
gradeChecker(85);
gradeChecker(55);
// Switch version
function gradeChecker(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
            break;
    }

    console.log(grade);
}
// 18. Character Replacement
function replaceCharacter(str, oldChar, newChar) {
  console.log(str.replaceAll(oldChar, newChar));
}
replaceCharacter("hello world", "l", "x");

// 19. Capitalize First Letter
function capitalizeFirst(text) {
  const result = text.charAt(0).toUpperCase() + text.slice(1);
  console.log(result);
  return result;
}
capitalizeFirst("hello world");
capitalizeFirst("javascript");

// 20. Switch: Traffic Light
function trafficLight(color) {
  switch (color.toLowerCase()) {
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
trafficLight("red");
trafficLight("blue");

// 21. Check String Length (if-else)
function isLongString(str) {
  if (str.length > 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}
isLongString("Hello");
isLongString("This is a long sentence");

// 22. Convert to Lowercase Then Check
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("Buy now SPAM offer");
isSpam("Hello friend");

// 23. Two-Part Initials
function getTwoPartInitials(fullName) {
  const parts = fullName.split(" ");
  const firstInitial = parts[0].charAt(0).toUpperCase();
  const secondInitial = parts[1].charAt(0).toUpperCase();
  console.log(`${firstInitial}.${secondInitial}.`);
}
getTwoPartInitials("John Doe");

// 24. Switch: Month to Season
function getSeason(monthNum) {
  switch (monthNum) {
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
      console.log("Invalid month");
  }
}
getSeason(1);
getSeason(7);
getSeason(13);

// 25. Check If String Contains Number
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
containsNumber("hello");
containsNumber("room 5");
containsNumber("abc123");

// 26. Pad a String
function padString(str, maxLength) {
  console.log(str.padEnd(maxLength, "*"));
}
padString("Hi", 6);

// 27. If-Else: Voting Eligibility
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(20);
canVote(15);

// 28. Reverse a String
function reverseString(text) {
  console.log(text.split("").reverse().join(""));
}
reverseString("hello");

// 29. Check Substring Position
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index === -1) {
    console.log("Not found");
  } else {
    console.log(index);
  }
  return index;
}
findWordPosition("I love JavaScript", "JavaScript");
findWordPosition("Hello world", "Python");

// 30. Switch: Simple Calculator
function calculate(a, operator, b) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid operator";
  }
  console.log(result);
  return result;
}
calculate(10, "+", 5);
calculate(10, "/", 2);
calculate(5, "%", 2);