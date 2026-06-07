// First of all, I did practice again the previous exercises in lesson.

//Ex.1

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    sum += numbers[i];
  }
  console.log(`Ex.1 ${sum}`);
}

sumArray([1, 3, 5, 7]);
sumArray([1, `sesfs`, 5, 7]);
sumArray({ 1: `anfneı`, 2: `eafeafe`, 3: `naonfe` });

//Ex.2

function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  console.log(`Ex.2 ${maxNumber}`);
}

findMax([1, 5, 23, 12]);

//Ex.3
function countOddEven(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    if (numbers[i] % 2 == 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  console.log(`Ex.3 Odd: ${countOdd} Even: ${countEven}`);
}

countOddEven([3, 6, 23, 18, 23]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

function sumRange(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    console.warn(
      `Provided input contains a non-numeric value. Check the input and try again.`,
    );
    return;
  }
  let sum = 0;
  let i = start;
  while (i <= end) {
    sum += i;
    i++;
  }
  console.log(`Ex.4 ${sum}`);
}
sumRange(3, 9);

//Ex.5

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    reversedArray.push(arr[i]);
  }
  console.log(`Ex.5 ${reversedArray}`);
}

reverseArray([5, 10, 34, 67]);
reverseArray(["q", 10, "b", 67]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(number) {
  if (!Array.isArray(number)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let positiveNumbers = [];
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    if (number[i] >= 0) {
      positiveNumbers.push(number[i]);
    }
  }
  console.log(`Ex.6: positive numbers are ${positiveNumbers}`);
}

filterNegative([5, -2, 0, 10, -20]);

//Ex.7

function doubleValues(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  const multiply = [];
  for (const item of numbers) {
    if (typeof item !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    multiply.push(item * 2);
  }
  console.log(`Ex.7 ${multiply}`);
}

doubleValues([3, 6, 9]);
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  if (typeof str !== `string`) {
    console.warn(
      `Provided input contains a non-numeric value. Ckeck the input and try again.`,
    );
    return;
  }
  for (const item of str) {
    console.log(`Ex.8 ${item}`);
  }
}
printCharacters("test");
printCharacters(1234);

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    console.warn("Provided input is not a valid object.");
    return;
  }
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log(`Ex.9 total is ${sum}`);
}

sumObjectValues({
  a: "hi",
  b: "hello",
  c: "never",
});
sumObjectValues({
  a: 5,
  b: 20,
  c: 10,
});

//Ex.10

function printObjectKeys(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    console.warn("Provided input is not a valid object.");
    return;
  }
  for (const key in obj) {
    console.log(`Ex.10 ${key}`);
  }
}

printObjectKeys({
  name: "Murat",
  age: 39,
  gender: "male",
});
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let i = 0;
  let sum = 0;
  do {
    if (typeof numbers[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(`Ex.11 sum is`, sum);
}

sumWithDoWhile([1, 2, 3, 4, 5]);
sumWithDoWhile([1, "a", 3, 4, 5]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let newArray = [];
  for (const item of arr) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  console.log(`Ex.12`, newArray);
}

removeDuplicates(["apple", "banana", "fruit", "banana"]);
removeDuplicates([1, "banana", "fruit", 1]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    console.warn(`Provided input must be a positive number.`);
    return;
  }
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.log(`Ex.13 ${result}`);
}

factorial(5);
factorial("p");

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.warn("Provided input must be a string.");
    return;
  }

  let splitSentence = sentence.split(" ");
  let reverseSentence = splitSentence.reverse();
  let pushSentence = reverseSentence.join(" ");

  console.log(`Ex.14.1 ${pushSentence}`);
}

reverseWords("How can I do this?");

//or

function newReverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.warn("Provided input must be a string.");
    return;
  }
  let words = sentence.split(" ");
  let reversedSentence = "";

  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i > 0) {
      reversedSentence += " ";
    }
  }
  console.log(`Ex.14.2 ${reversedSentence}`);
}

newReverseWords(`This is second option.`);
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== "number") {
    console.warn(`Provided input is not an array`);
    return;
  }
  let filterWord = [];
  for (const item of words) {
    if (item.length >= minLength) {
      filterWord.push(item);
    }
  }
  console.log(`Ex. 15`, filterWord);
}

filterLongWords(["Murat", "Melike", "Ali", "Demet", "Muhammed"], 4);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  if (!Array.isArray(arr)) {
    console.warn(`Provided input is not an array`);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`Ex.16 Index: ${i}, Value: ${arr[i]}`);
  }
}

logElementsWithIndex(["Murat", "Ali", "Ahmet"]);
logElementsWithIndex();

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.warn(`Provided input is not an array`);
    return;
  }
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== `number`) {
      console.warn(
        `Provided input contains a non-numeric value. Ckeck the input and try again.`,
      );
      return;
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(`Ex.17 Minimum number is in array:`, min);
}

findMin([100, 15, 12, 35, 10]);
findMin([]);
findMin(["aaen", "aen", "ae"]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  if (!Array.isArray(arr) || typeof word !== "string") {
    console.log(`Provided input is not an array or word is not a string`);
    return;
  }
  let countWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == word) {
      countWord++;
    }
  }
  console.log(`Ex.18: Word count`, countWord);
}

countOccurrences(["a", "b", "a", "a"], "a");
countOccurrences([], "a");
countOccurrences(3, 5, 3, 2, "3");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.log(`Provided input is not an array or word is not a string`);
    return;
  }
  let newArray = [];
  for (const item of arr) {
    if (item) {
      newArray.push(item);
    }
  }
  console.log(`Ex.19`, newArray);
}

removeFalsyValues(["Murat", 0, null, NaN, "Seda"]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  if (typeof str !== "string") {
    console.log("Provided input is not an string");
    return;
  }
  let array = str.split("");
  let sum = 0;
  for (const char of array) {
    let converted = Number(char);
    if (!Number.isNaN(converted) && char != " ") {
      sum += converted;
    }
  }
  console.log(`Ex.20: total number`, sum);
}

sumDigits("aeni372 ani4 q3i");
sumDigits(9386391);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log(`Provided input is not an array or word is not a string`);
    return;
  }
  let sum = 0;
  for (const item of numbers) {
    if (typeof item !== "number") {
      console.log(`Provided input is not an number`);
      return;
    }
    sum += item;
  }
  let avarageNumbers = sum / numbers.length;
  console.log(`Ex.21`, avarageNumbers);
}

averageArray([5, 3, 7, 9]);
averageArray(["d", "f", "me"]);
averageArray([]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray){
  if(!Array.isArray(twoDArray)){
    console.log(`Provided input is not an array`);
    return;
}
    let result = [];
    for (const item of twoDArray){
      if (Array.isArray(item)){
          for (const subItem of item){
          result.push(subItem)
        } 
        } else {
          result.push(item);
      }
    }
    console.log(`Ex.22`, result);
  
 }
  flattenArray([[1,2],[3,4]]) ;



/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter){
  if(!Array.isArray(words) || typeof letter !== "string"){
    console.log(`Provided input is not an array or is not string`);
    return;
  }
  let filteredArray = [];
  for (const item of words){
    if (item.includes(letter)){
      filteredArray.push(item)
    }
  }
  console.log(filteredArray);
}

findWordsWithLetter(["Murat", "Seda", "Samet", "Irfan"], "r");
findWordsWithLetter(["Murat", "Seda", "Samet", "Irfan"], "3");
findWordsWithLetter(["Murat", "Seda", "Samet", "Irfan"], 3);

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
   if(!Array.isArray(arr)){
    console.log(`Provided input is not an array`);
    return;
  }
  arr.push(itemToPush);
  console.log(`Ex.24 Uptade Array:`, arr);
   
  let poppedElement= arr.pop();
  console.log(`Ex.24 Popped Element: `, poppedElement);
  console.log(`Ex.24 Final array:`, arr);
}

pushPopExample(["blue", "green", "black"], "white")


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
  if (!Array.isArray(queue)){
    console.log(`Provided input is not an array`);
    return;
  }
  queue.push(newPerson);
  console.log(`Ex.25 Updated queue:`, queue);

  let removedPerson = queue.shift();
  console.log(`Ex.25 Removed person:`, removedPerson)
  console.log(`Ex.25 Final queue:`, queue)
}
manageQueue(["First", "Second", "Third"], "Fourth");

/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  console.log(`Ex.26 to do list:`, todoList);
  todoList.splice(startIndex,deleteCount);
  todoList.push(...newTasks);
  console.log(`Ex.26 Updated list:`, todoList)
}

updateTodoList(["blue", "black", "white", "pink"], 1, 2, "grey", "dark", "light")
