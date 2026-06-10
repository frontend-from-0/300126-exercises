/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  let totalSum = 0;
  if (typeof start !== "number" || typeof end !== "number") {
    console.warn(
      "Provided input contains a non-numeric value. Check the input and try again.",
    );
    return;
  }
  while (start <= end) {
    totalSum += start;
    start++;
  }

  console.log(`Total sum of the range is ${totalSum}`);
}

console.log(`Ex.4:`);

sumRange(3, 13);
sumRange("3", 13);
sumRange(15, 5);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }
  let allPositive = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      allPositive.push(numbers[i]);
    }
  }
  console.log(`Positive numbers of this array is ${allPositive}`);
}
console.log(`Ex.6:`);
filterNegative([1, -2, 3, -4, 5, 0]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  if (typeof str !== "string") {
    console.warn("Provided input is not a string.");
    return;
  }
  for (const char of str) {
    console.log(char);
  }
}
console.log(`Ex.8:`);

printCharacters("beraat");
printCharacters(12354796);

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  if (typeof obj !== "object" || !obj) {
    console.log("Not an object");
    return;
  }
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  } /*need to identify where to use "key"*/
  console.log(`Sum of the object is ${sum}`);
}
console.log(`Ex.9:`);
sumObjectValues({ a: 10, b: 20, c: 5 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }
  let i = 0;
  let sum = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(`Sum of the array is ${sum}`);
}
console.log(`Ex.11:`);
sumWithDoWhile([1, -2, 3, -4, 5, 0]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

/*function removeDuplicates(arr){
    if (!Array.isArray(arr)) {
    console.warn('Provided input is not an array');
    return;
  }
  let nonDuplicate = []
  for (let i = 0; i < arr.length; i++  ) {
    if (arr[i] !== arr[i+1]){
        nonDuplicate.push(arr[i])
    }
   
  } console.log(nonDuplicate)   next item'ı kontrol ediyor, önceki itemlara bakamıyor
}*/

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    console.warn("Provided input is not an array");
    return;
  }
  let nonDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!nonDuplicate.includes(arr[i])) {
      /* !element.includes() exclamation mark is the negative*/
      nonDuplicate.push(arr[i]);
    }
  }
  console.log(nonDuplicate);
}
console.log(`Ex.12:`);
removeDuplicates([0, 1, 2, 3, 4, 5, 6, 0, 3, 2, 4, 0, 3, 12]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  if (typeof n !== "number") {
    console.warn("Provided input is not a number.");
    return;
  }
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  console.log(`Factorial of the ${n} is ${factor}`);
}
console.log(`Ex.13:`);
factorial(8);
factorial(5);
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.

*/

function reverseWords(sentence) {
  const reversedSentence = sentence.split(" ").reverse().join(" ");

  console.log(reversedSentence);
}
console.log(`Ex.14:`);
reverseWords("I am Beraat"); /*couldnt figure out how to do with loop*/

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== "number" || minLength < 0) {
    console.warn("Provided input is not an array or the number is invalid.");
    return;
  }

  let longerWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longerWords.push(words[i]);
    }
  }
  console.log(`Words longer than ${minLength} characters: ${longerWords}`);
}
console.log(`Ex.14:`);
filterLongWords(["many", "a lot of", "words", "verylongword"], 5);
filterLongWords(["many", "a lot of", "words", "verylongword"], -5);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  if (!Array.isArray(arr)) {
    console.warn("Provided input is not an array");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}

console.log(`Ex.15:`);
logElementsWithIndex(["many", "a lot of", "words", "verylongword"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }
  if (typeof numbers[0] !== "number") {
    console.warn(
      "Provided input contains a non-numeric value. Check the input and try again.",
    );
    return;
  }

  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.warn(
        "Provided input contains a non-numeric value. Check the input and try again.",
      );
      return;
    }
    if (minNumber > numbers[i]) {
      minNumber = numbers[i];
    }
  }
  console.log(`Minimum number in the array is ${minNumber}`);
}
console.log(`Ex.17:`);
findMin([1, 2, 50, 6]);
findMin([-1, -2, -50, -6]);
findMin(["1", "2", "11"]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  if (!Array.isArray(arr)) {
    console.warn("Provided input is not an array");
    return;
  }
  let itemCount = 0;
  for (const item of arr) {
    if (item === word) {
      itemCount++;
    }
  }
  console.log(`${word} is repeated ${itemCount} times in the array.`);
}

console.log(`Ex.18:`);
countOccurrences(["apple", "banana", "apple", "orange", "apple"], "apple");
countOccurrences(
  ["apple", "banana", "apple", "orange", "apple"],
  "aPPle",
); /*case sensitive*/

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.warn("Provided input is not an array");
    return;
  }
  let notFalsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      /*JavaScript automatically treats falsy values as false, need to look out what falsy value is and how to detect*/
      notFalsy.push(arr[i]);
    }
  }
  console.log(`Falsy values are removed and the rest are ${notFalsy}`);
}

console.log(`Ex.19:`);
removeFalsyValues([0, 1, false, 2, "", 3, null, "hello", undefined, NaN]);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  if (typeof str !== "string") {
    console.warn("Provided input is not a string.");
    return;
  }

  let sum = 0;
  for (const item of str) {
    /*if (typeof item == "number") {
            sum += item
        } didnt work , it slice them into another string*/
    if (item >= "0" && item <= "9") {
      sum += Number(item);
    } /*if possible discover another way*/
  }
  console.log(`Sum of the number in ${str} is ${sum}`);
}

console.log(`Ex.20:`);
sumDigits("a83bc2 k291sda");
sumDigits("beraat");
sumDigits(12345);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }

  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  let averageSum = sum / numbers.length;

  console.log(`Average of the array is ${averageSum}`);
}
console.log(`Ex.21:`);

averageArray([1, 2, 50, 6]);
averageArray(["apple", 1, 3, null, false]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  if (!Array.isArray(twoDArray)) {
    console.warn("Provided input is not an array");
    return;
  }
  let flattenedArray = [];
  for (const array of twoDArray) {
    if (Array.isArray(array)) {
      for (const item of array) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(array);
    }
  }
  console.log(`The flattened array is ${flattenedArray}`);
}
console.log(`Ex.22`);

flattenArray([
  [1, 2],
  [3, 4],
]);
flattenArray([[1, 2], 3, "hi", [3, 4]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  if (!Array.isArray(words) || letter.length === 0) {
    console.warn("Provide an array and valid search value");
    return;
  }
  let filteredArray = [];
  for (const item of words) {
    if (
      typeof item == "string" &&
      item.toLowerCase().includes(letter.toLowerCase())
    ) {
      filteredArray.push(item);
    }
  }
  console.log(`The items with the letter ${letter}: ${filteredArray} `);
}

console.log(`Ex.23:`);
findWordsWithLetter(["apple", "beraat", null, 1, "3385"], "a");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function pushPopExample(arr, itemToPush) {
  if (!Array.isArray(arr) || itemToPush === undefined) {
    console.warn(
      "Provided input is not an array or the item to push is not provided",
    );
    return;
  }

  arr.push(itemToPush);
  console.log(`The new array is ${arr}`);

  let popped = arr.pop();
  console.log(`Popped element is ${popped}`);

  console.log(`The last array is ${arr}`);
}

console.log(`Ex.24:`);
pushPopExample([1, 2, 3], 4);
pushPopExample([1, 2, 3], false);
pushPopExample([1, 2, 3]);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson) {
  if (!Array.isArray(queue) || newPerson === undefined) {
    console.warn(
      "Provided input is not an array or the new person to add is not provided",
    );
    return;
  }

  queue.push(newPerson);
  console.log(`The new queue is ${queue}`);

  let shifted = queue.shift();
  console.log(`Shifted element is ${shifted}`);

  console.log(`The last queue is ${queue}`);
}

console.log(`Ex.25:`);
manageQueue([1, 2, 3], 4);
manageQueue([1, 2, 3], false);
manageQueue([1, 2, 3]);

/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  if (
    !Array.isArray(todoList) ||
    startIndex > todoList.length ||
    typeof startIndex !== "number" ||
    typeof deleteCount !== "number"
  ) {
    console.warn(
      "Provided list is not an array or the start node is out of range or the provided start and delete items are not numeric.",
    );
    return;
  }

  console.log(`Current tasks are ${todoList}`);

  let removeTask = todoList.splice(startIndex, deleteCount);

  console.log(`Removed tasks are ${removeTask}`);

  todoList.push(...newTasks);

  console.log(`The updated list of the task is ${todoList}`);
}

console.log(`Ex.26;`);
updateTodoList(
  ["exercise", "practice", "code", null ,"run"],
  1,
  2,
  "sleep",
  "eat",
);
