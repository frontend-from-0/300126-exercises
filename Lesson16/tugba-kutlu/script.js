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
console.log("Ex-4");
sumRange(6, 1);
sumRange(1, 6);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid value");
    return;
  }
  let positiveNumArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumArray.push(numbers[i]);
    }
  }
  console.log(positiveNumArray);
}
console.log("\nEx-6");
filterNegative([-1, 8, 9, -50, 4, -7]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  for (let letter of str) {
    console.log(letter);
  }
}
console.log("\nEx-8");
printCharacters("Cat");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  if (typeof obj !== "object") {
    console.log("Enter a valid value");
    return;
  }
  let sum = 0;
  for (let num in obj) {
    sum += obj[num];
  }
  console.log(sum);
}
console.log("\nEx-9");
sumObjectValues({ a: 14, b: 40, c: 8 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid value");
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
console.log("\nEx-11");
sumWithDoWhile([3, 6, 30, 13, 22]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid value");
    return;
  }

  let newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  console.log(newArr);
}
console.log("\nEx-12");
removeDuplicates([8, 8, 7, 6, 6, 5, 4]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  if (typeof n !== "number") {
    console.log("Enter a valid value");
    return;
  }
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  console.log(result);
}
console.log("\nEx-13");
factorial(6);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.log("Enter a valid value");
    return;
  }
  let wordsArray = sentence.split(" ");
  let reverseArr = wordsArray.reverse();
  let reverseSentence = reverseArr.join(" ");
  console.log(reverseSentence);
}
console.log("\nEx-14");
reverseWords("bugün hava çok güzel");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== "number") {
    console.log("Enter a valid value");
    return;
  }
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length >= minLength) {
      result.push(currentWord);
    }
  }
  console.log(result);
}
console.log("\nEx-15");
filterLongWords(["cat", "television", "apple", "computer", "water", "book"], 5);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid value");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`index: ${i}, value: ${arr[i]}`);
  }
}
console.log("\nEx-16");
logElementsWithIndex(["tree", "pillow", "chair", "flower"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Enter a valid value");
    return;
  }
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (currentNumber < min) {
      min = currentNumber;
    }
  }
  console.log(min);
}
console.log("\nEx-17");
findMin([18, 20, 4, 8, 45, 1]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  if (!Array.isArray(arr) || typeof word !== "string") {
    console.log("Enter a valid value");
    return;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`${word}, ${count}`);
}
console.log("\nEx-18");
countOccurrences(
  ["apple", "strawberry", "strawberry", "banana", "blueberry"],
  "strawberry",
);
countOccurrences(["apple", "strawberry", "banana", "blueberry"], "pineapple");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.log("Enter a valid value");
    return;
  }
  let removefalse = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement) {
      removefalse.push(currentElement);
    }
  }
  console.log(removefalse);
}
console.log("\nEx-19");
removeFalsyValues([
  7,
  "pink",
  false,
  0,
  "blue",
  "",
  null,
  "purple",
  72,
  undefined,
]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  if (typeof str !== "string") {
    console.log("Enter a valid value");
    return;
  }
  let totalsum = 0;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current !== " " && !isNaN(current)) {
      totalsum += Number(current);
    }
  }
  console.log(totalsum);
}
console.log("\nEx-20");
sumDigits("asdfg1243");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    sum += currentNumber;
  }
  let average = sum / numbers.length;
  console.log(average);
}
console.log("\nEx-21");
averageArray([3, 8, 4, 1]);
averageArray([40, 30, 20, 10]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  if(!Array.isArray(twoDArray)){
    console.log("Enter a valid value")
    return;
  }
  let flat = [];
  for (let i = 0; i < twoDArray.length; i++) {
    let currentBox = twoDArray[i];
    for (let j = 0; j < currentBox.length; j++) {
      flat.push(currentBox[j]);
    }
  }
  console.log(flat);
}
console.log("\nEx-22");
flattenArray([[8, 9], [10, 11]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter){
  if(!Array.isArray(words) || typeof letter !== "string"){
    console.log("Enter a valid value")
    return;
  }
  let filteredWord = [];
  for(let i = 0; i < words.length; i++){
    let currentWord = words[i];
    if(currentWord.includes(letter)){
      filteredWord.push(currentWord)
    }
  }
  console.log(filteredWord)
}
console.log("\nEx-23");
findWordsWithLetter(["cat", "horse", "dog", "mouse"], "o")

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
  if(!Array.isArray(arr) || typeof itemToPush !== "string"){
    console.log("Enter a valid value")
    return;
  }
  arr.push(itemToPush);
  console.log(arr);
  let poppedElement = arr.pop();
  console.log(poppedElement);
  console.log(arr);
}
console.log("\nEx-24");
pushPopExample(["apple", "pineapple"], "banana")

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
   if(!Array.isArray(queue) || typeof newPerson !== "string"){
    console.log("Enter a valid value")
    return;
  }
  queue.push(newPerson);
  console.log(queue);
  let removedPerson = queue.shift();
  console.log(removedPerson);
  console.log(queue);
}
console.log("\nEx-24");
manageQueue(["darcy", "elizabeth"], "jane")

/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  if(!Array.isArray(todoList || typeof startIndex !== "number" || typeof deleteCount !== "number")){
    console.log("Enter a valid value")
    return;
  }
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  for(let i = 0; i < newTasks.length; i++){
    todoList.push(newTasks[i]);
  }
  console.log(todoList);
}
console.log("\nEx-26");
updateTodoList(["read a book", "eat food", "draw something", "watch a movie"], 1, 3, "walk")
