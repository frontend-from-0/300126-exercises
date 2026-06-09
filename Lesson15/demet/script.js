/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
    if (a > b) {
        console.log("a is bigger");
    } else if (b > a) {
        console.log("b is bigger");
    } else {
        console.log("Numbers are equal");
    }
}


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
        console.log("Strings are equal.");
    } else {
        console.log("Strings are not equal.");
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
        let truncated = text.slice(0, maxLength) + "...";
        console.log(truncated);
    } else {
        console.log(text);
    }
}

truncateString("JavaScript harika bir dildir.", 10);
truncateString("Kısa metin", 20);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
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
        console.log("Secure connection");
    } else {
        console.log("Unsecure connection");
    }
}

checkProtocol("https://google.com");
checkProtocol("HTTP://example.com");


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
getDayOfWeek(7);
getDayOfWeek(9);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
    let result = word.repeat(times);
    console.log(result);
}

repeatWord("Hello", 3);
repeatWord("Bye", 5);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
    let censoredSentence = sentence.replaceAll(target, "****");
    console.log(censoredSentence);
}

censorWord("Bu elma çok güzel bir elma.", "elma");
censorWord("Bu gizli bir bilgidir, bu bilgi paylaşılmaz.", "bilgi");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
    if (str[0] === 'A') {
        console.log("Starts with A");
    } else {
        console.log("Does not start with A");
    }
}

startsWithA("Apple");
startsWithA("Banana");
startsWithA("ahmet");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
    let result = text.slice(-n);
    console.log(result);
}

sliceLastN("JavaScript", 3);
sliceLastN("Merhaba Dünya", 5);
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

gradeChecker(95);
gradeChecker(83);
gradeChecker(55);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
    let result = str.replaceAll(oldChar, newChar);
    console.log(result);
}

replaceCharacter("banana", "a", "o");
replaceCharacter("192.168.1.1", ".", "-");
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
    if (text.length === 0) return text;
    let result = text[0].toUpperCase() + text.slice(1);
    console.log(result);
}

capitalizeFirst("hello world");
capitalizeFirst("javascript");
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
trafficLight("Yellow");
trafficLight("blue");
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
    if (str.length > 10) {
        console.log("Long string");
    } else {
        console.log("Short string");
    }
}

isLongString("JavaScript");
isLongString("Merhaba Dünya!");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
    if (text.toLowerCase().includes("spam")) {
        console.log("This text is spam.");
    } else {
        console.log("This text is not spam.");
    }
}

isSpam("Get cheap insurance now, click this SPAM link!");
isSpam("Hello, how are you doing today?");
/*
23. Two-Part Initials
   - Define a function `getTwoPartInitials(fullName)` for names with exactly two words
     separated by one space (e.g. "John Doe").
   - Use split(" ") once, then charAt(0) on each part (index 0 and 1 only).
   - Uppercase each letter and log in the form "J.D."
   - Do not use loops; assume exactly two words.
*/
function getTwoPartInitials(fullName) {
    let parts = fullName.split(" ");
    let firstInitial = parts[0].charAt(0).toUpperCase();
    let secondInitial = parts[1].charAt(0).toUpperCase();
    
    console.log(firstInitial + "." + secondInitial + ".");
}

getTwoPartInitials("John Doe");
getTwoPartInitials("anna smith");
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
getSeason(6);
getSeason(15);
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a string method such as
     .match(/\d/) or a similar check for any digit (no loops).
   - If a digit is found, log: "Contains number"
   - Otherwise, log: "No number found"
   - Test with strings like "hello", "room 5", and "abc123".
*/
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
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
    if (str.length < maxLength) {
        let padded = str.padEnd(maxLength, "*");
        console.log(padded);
    } else {
        console.log(str);
    }
}

padString("abc", 6);
padString("hello", 10);
padString("javascript", 5);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

   - function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
/*
28. Reverse a String
   - Define a function `reverseString(text)` that reverses the entire string using
     split(""), reverse(), and join("") (no for/while loops).
   - Log the result.
   - Example: "hello" -> "olleh"
*/
function reverseString(text) {
    let reversed = text.split("").reverse().join("");
    console.log(reversed);
}

reverseString("hello");
reverseString("javascript");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
    let index = sentence.indexOf(word);
    
    if (index === -1) {
        console.log("Not found");
    } else {
        console.log(index);
    }
}

findWordPosition("JavaScript harika bir dil.", "harika");
findWordPosition("Masaüstü bilgisayar", "telefon");
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

calculate(5, "+", 3);
calculate(10, "*", 2);
calculate(8, "/", 2);
calculate(7, "x", 4);