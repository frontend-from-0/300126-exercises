/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  let totalSum = 0;
  let i = start;

  while (i <= end) {
    totalSum += i;
    i++;
  }

  console.log("Result4:", totalSum);
}
sumRange(9, 15);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  const nonNegativeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      nonNegativeNumbers.push(numbers[i]);
    }
  }
  console.log("Result6:", nonNegativeNumbers);
}
filterNegative([-7, -2, -1, 0, 1, 5, 10]);


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  console.log("Result8:");
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("Hey!");


/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log("Result9:", sum);
}
sumObjectValues({ a: 10, b: 20, c: "5" });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let total = 0;
  let i = 0;
  do {
    total += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log("Result11:", total);
}
sumWithDoWhile([1, -2, 3, 4, 5]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log("Result12:", uniqueArray);
}
removeDuplicates([1,'b','c','b','d',3]);


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log("Result13:", result);
}
factorial(7);


/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  const wordsArray = sentence.split(" ");
  const reversedArray = wordsArray.reverse();
  const result = reversedArray.join(" ");
  console.log("Result14:", result);
}

reverseWords("you work to live not live to work");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  const longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  console.log("Result15:", longWords);
}
filterLongWords(["cat", "dog", "lion","elephant", "ant", "giraffe","tiger"], 5);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  console.log("Result16:");
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["apple", "banana", "cherry"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  if (numbers.length === 0) {
    console.log("Ex. 17: Provided array is empty.");
    return;
  }
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("Result17:", min);
}
findMin([5, 2, -9, 1, 6]);


/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log("Result18:", count);
}
countOccurrences(["coffee", "code", "bug", "error", "bug", "coffee", "bug", "cry", "bug", "success"], "bug");


/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  const truthyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i]);
    }
  }
  console.log("Result19:", truthyArray);
}
removeFalsyValues([0, "Melike", false, 36, "", null, "learning", undefined, NaN, true]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "0" && char <= "9") {
      total += Number(char);
    } 
  }
  console.log("Result20:", total);
}
sumDigits("abc123def45ghi6");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers){
  if (numbers.length === 0){
    console.log ("Result21: Array is empty");
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log("Result21:", average);
}
averageArray([10, 20, 30, 40, 50]);
// averageArray([]); // Test with empty array


/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  const flatArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flatArray.push(twoDArray[i][j]);
    }
  }
  console.log("Result22:", flatArray);
}
flattenArray([[1, 2], [3, 4], [5, 6]]);


/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredWords.push(words[i]);
    }
  }
  console.log("Result23:", filteredWords);
}
const words = ["coding", "nosleep", "togiveup", "coffee", "endlessbug" , "grumbling","usinglittleai","fun","","failure","finalsuccess", "lollygag"];
findWordsWithLetter(words, "n");


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
  arr.push(itemToPush);
  console.log("Result24 - After Push:", arr);
  const poppedElement = arr.pop();
  console.log("Result24 - Popped Element:", poppedElement);
  console.log("Result24 - Final Array:", arr);
}
const shoppingList = ["apple", "banana", "graphe"];
const newShoppingItem = "bear"; //I meant to write “pear” here, but I accidentally wrote “bear” 
pushPopExample(shoppingList, newShoppingItem);


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
  queue.push(newPerson);
  console.log("Result25 - After Push:", queue);
  const removedPerson = queue.shift();
  console.log("Result25 - Removed Person:", removedPerson);
  console.log("Result25 - Final Queue:", queue);
}
const queue = ["Melike", "Melike&İsmail","Ömer"];
const newPerson = "Ayşe";
manageQueue(queue, newPerson);


/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log("Result26 - Current To-Do List:", todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log("Result26 - Updated To-Do List:", todoList);
}
const myWeekendTodoList = ["Breakfast", "Cleaning", "Shopping", "Ironing", "Coffee Date",];
updateTodoList(myWeekendTodoList, 1, 3, "Cooking", "Movie Night" );

