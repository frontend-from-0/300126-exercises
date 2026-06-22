/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    console.log("Enter a valid value");
    return;
  }
  let sum = 0;
  if (start >= end) {
    while (start >= end) {
      sum += start;
      start--;
    }
    console.log(sum);
    return;
  }
  while (start <= end) {
    sum += start;
    start++;
  }
  console.log(sum);
}
console.log("Ex.4: ");
sumRange(1, 12);
sumRange(6, 1);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid number");
    return;
  }
  let positiveArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveArray.push(numbers[i]);
    }
  }
  console.log(positiveArray);
}
console.log("\nEx.6");
filterNegative([1, 12, 35, -24, 23, -45, 11]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid string");
    return;
  }
  for (let char of str) {
    console.log(char);
  }
}
console.log("\nEx.8");
printCharacters("Jungle");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  if (typeof obj !== "object") {
    console.log("Enter a valid object value");
    return;
  }
  let sum = 0;
  for (let nums in obj) {
    sum += obj[nums];
  }
  console.log(sum);
}
console.log("\nEx.9");
sumObjectValues({ a: 12, b: 23, c: 3 });
sumObjectValues(2, 23, 3);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

console.log("\nEx.11");
function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid array");
    return;
  }
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sum);
}
sumWithDoWhile([5, 15, 12, 3]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log("\nEx.12");
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid array");
    return;
  }
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}
removeDuplicates([1, 4, 7, 2, 4, 8, 1, 3, 7, 1, 9]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
console.log("\nEx.13");
function factorial(n) {
  if (typeof n !== "number") {
    console.log("Enter a valid number");
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(4);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log("\nEx.14");
function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.log("Enter a valid number");
    return;
  }
  let reverse = sentence.split(" ").reverse().join(" ");
  console.log(reverse);
}
reverseWords("Borealis has to be destroyed at all costs.");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("\nEx.15");
function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== "number") {
    console.log("Enter a valid number");
    return;
  }
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      newArray.push(words[i]);
    }
  }
  console.log(newArray);
}
filterLongWords(
  [
    "if",
    "the",
    "site",
    "is",
    "where",
    "we",
    "think",
    "it",
    "is,",
    "then",
    "it",
    "should",
    "be",
    "no",
    "more",
    "than",
  ],
  4,
);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid array");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
console.log("\nEx.16");
logElementsWithIndex([33, 29, 12, 18, 46, 7]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid array");
    return;
  }
  let smallestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (smallestNumber > numbers[i]) {
      smallestNumber = numbers[i];
    }
  }
  console.log(smallestNumber);
}
console.log("\nEx.17");
findMin([3, 8, 6, 9, 15, 11, 1, -2, -1, -13]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  if (!Array.isArray(arr) || typeof word !== "string") {
    console.log("Enter a valid array or string");
    return;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
      count++;
    }
  }
  console.log(count);
}
console.log("\nEx.18");
countOccurrences(
  [
    "Any",
    "other",
    "name",
    "is",
    "not",
    "other",
    "days",
    "wish",
    "other",
    "phase",
  ],
  "other",
);
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid array");
    return;
  }
  let truthyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyValues.push(arr[i]);
    }
  }
  console.log(truthyValues);
}
console.log("\nEx.19");
removeFalsyValues([0, "", false, null, undefined, NaN, "Prelude", 42, [], {}]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  if(typeof str !== "string"){
    console.log("Enter a valid string value.")
    return;
  }
  let totalSum = 0;
  for (let i = 0; i < str.length; i++) {
  if (/\d/.test(str[i])) {
    totalSum += Number(str[i]);
  }
}
  console.log(totalSum);
}

console.log("\nEx.20");
sumDigits("ar 42");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers){
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid array");
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(average)
}
console.log("\nEx.21");
averageArray([13, 17, 22, 11, 4, 35])

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray){
  if (!Array.isArray(twoDArray)) {
    console.log("Enter a valid array");
    return;
  }
  let newArray = [];
  for (let i = 0; i < twoDArray.length; i++){
    for(let j = 0; j < twoDArray[i].length; j++){
      newArray.push(twoDArray[i][j])
    }
  }
  console.log(newArray)
}
console.log("\nEx.22");
flattenArray([[1, 2], [3, 4], [5, 6], [11, 12]])

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter){
  if (!Array.isArray(words) || typeof letter !== "string") {
    console.log("Enter a valid array or letter");
    return;
  }
  let newArray = [];
  for (let i = 0; i < words.length; i++){
    let strSplit = words[i];
    if(strSplit.toLowerCase().includes(letter)){
      newArray.push(words[i])
    }
  }
  console.log(newArray);
}
console.log("\nEx.23");
findWordsWithLetter(["Monolith", "Quantities", "Dragon", "Weight", "September", "Chapter", "Final"], "m")
findWordsWithLetter(["Monolith", "Quantities", "Dragon", "Weight", "September", "Chapter", "Final"], "i")

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
function pushPopExample(arr, itemToPush){
  if (!Array.isArray(arr)) {
    console.log("Enter a valid array");
    return;
  }
  arr.push(itemToPush);
  console.log("After added a new item, the new array has : " + arr);
  console.log("The popped item is: " + arr.pop());
  console.log("Array is now: " + arr);
}
console.log("\nEx.24");
pushPopExample([1, 2, 3, 4, 5, 6, 7, 8], 42);


/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson){
  if (!Array.isArray(queue)) {
    console.log("Enter a valid array");
    return;
  }
  queue.push(newPerson);
  console.log("Queue is: " + queue);
  console.log("Old Person: " + queue.shift());
  console.log("Queue is now: " + queue);
}
console.log("\nEx.25");
manageQueue(["Taylor", "Jeremy", "Harold"], "Marc");


/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  if(!Array.isArray(todoList) || typeof startIndex !== "number" || typeof deleteCount !== "number"){
    console.log("Enter a valid value.")
    return
  }
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks)
  console.log(todoList);
}
console.log("\nEx.26");
updateTodoList(["Walk", "Stretch", "Read"], 0, 2, "Draw", "Code")
