/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.warn(
        "Provided input contains a non-numeric value. Check the input and try again.",
      );
      return;
    }

    totalSum = totalSum + numbers[i];
  }
  console.log("Ex.1: " + totalSum);
}
sumArray([1, 2, 5, 6]);
sumArray(["00", 2, "15", 6]);

sumArray({ 1: "aseasd", 2: "aaa", 5: "aaaa", 6: false });

console.log({ 1: "aseasd", 2: "aaa", 5: "aaaa", 6: false });
console.table({ 1: "aseasd", 2: "aaa", 5: "aaaa", 6: false });

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

function findMax(numbers) {
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

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.warn(
        "Provided input contains a non-numeric value. Check the input and try again.",
      );
      return;
    }
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  console.log("Ex.2: " + maxNumber);
}

findMax([1, 2, 50, 6]);
findMax([-1, -2, -50, -6]);
findMax(["1", "2", "11"]);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
  let oddNumbersArray = [];
  let evenNumbersArray = [];

  for (const item of numbers) {
    if (typeof item !== "number") {
      console.warn(
        "Provided input contains a non-numeric value. Check the input and try again.",
      );
      return;
    }
    if (item % 2 === 0) {
      evenNumbersArray.push(item);
    } else {
      oddNumbersArray.push(item);
    }
  }

  console.log("Ex.3:", `Odd: ${oddNumbersArray}, Even: ${evenNumbersArray}`);
}
countOddEven([1, 2, 53, 6]);
/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    console.warn(
      "Provided input contains a non-numeric values. Check the input and try again.",
    );
    return;
  }
  let total = 0;

  while (start <= end) {
    total += start;
    start++;
  }
  console.log("Ex.4: " + total);
}

sumRange(2, 6);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    console.warn("Provided input is not an array");
    return;
  }
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log("Ex.5:", reversedArray);
}
reverseArray([1, 2, 53, 6]);
reverseArray(undefined);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array. */
function filterNegative(numbers) {
  let positiveNumbers = [];
  for (const number of numbers) {
    if (number >= 0) {
      positiveNumbers.push(number);
    }
  }

  console.log(positiveNumbers);
  return positiveNumbers;
}
console.log("Ex.6:");
filterNegative([2, -4, 7, 10]);
filterNegative([2, 5, 7, 10]);
filterNegative([-2, -4, -7, -10]);

/*
!!!
We can solve this problem in another way as well.

function filterNegative(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      newArray.push(numbers[i]);
    }
  }
  console.log(newArray);
}
!!!
*/

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log("Ex.7: ");
function doubleValues(numbers) {
  if (!Array.isArray(numbers)) {
    console.warn("Provided input is not an array");
    return;
  }

  const result = [];
  for (const item of numbers) {
    if (typeof item !== "number") {
      console.warn(
        "Provided input contains a non-numeric value. Check the input and try again.",
      );
      return;
    }
    result.push(item * 2);
  }
  console.log(result);
}
doubleValues([5, 4, 8, 30]);
doubleValues(5, 4, 8, 30);
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  console.log("Ex.8: ");
  for (const characterStr of str) {
    console.log(characterStr);
  }
}
printCharacters("Berk");
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
console.log("Ex.9:");
function sumObjectValues(obj) {
  if (typeof obj !== "object" || !obj) {
    console.log("Not an object");
    return;
  }
  let total2 = 0;
  for (const testKey in obj) {
    total2 += obj[testKey];
  }
  console.log(total2);
}
sumObjectValues({ a: 10, b: 20, c: 5 });
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"

    {
    name: 'john',
    username: 'john',
    }
*/
console.log("Ex.10:");
function printObjectKeys(obj) {
  if (typeof obj !== "object" || !obj) {
    console.log("Not an object");
    return;
  }
  for (const x in obj) {
    console.log(x);
  }
}
printObjectKeys({ name: "Alice", age: 25 });
printObjectKeys(null);
printObjectKeys([1, 2, 3]);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Ex.11:");
function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Please provide a valid array.");
    return;
  }
  if (numbers.length === 0) {
    console.log("Total: 0");
    return 0;
  }
  let k = 0;
  let sum11 = 0;

  do {
    sum11 += numbers[k];
    k++;
  } while (k < numbers.length);
  console.log("Total:", sum11);
}
sumWithDoWhile([1, 2, 3, 4, 5]);
sumWithDoWhile([1, -2, -3, 4, 5]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log("Ex.12:");
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return "Please provide a valid array.";
  if (arr.length === 0) {
    console.log("Total: 0");
    return 0;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}
removeDuplicates([1, 3, 2, 3, 1, 4, 2]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
console.log("Ex.13:");
function factorial(n) {
  if (n < 0) {
    console.log("Please provide a positive number.");
    return;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(5);
factorial(0);
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log("Ex.14:");
function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.log("Please provide a string value");
    return;
  }

  let newArray = sentence.split(" ");
  newArray.reverse();
  let result = "";
  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      result = newArray[i];
    } else {
      result = result + " " + newArray[i];
    }
  }
  console.log(result);
}
reverseWords("Please provide a string value");
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Ex.15:");
function filterLongWords(words, minLength) {
  if (!Array.isArray(words) || typeof minLength !== "number") {
    console.log("Please provide valid inputs.");
    return;
  }
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      result.push(words[i]);
    }
  }
  console.log(result);
}
filterLongWords(["unreal", "ev", "mimari", "js", "muffin"], 4);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log("Ex.16:");
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i} Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["unreal", "ev", "mimari", "js", "muffin"]);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Ex.17:");
function findMin(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Please provide a valid array");
    return;
  }
  if (numbers.length === 0) {
    return undefined;
  }
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= result) {
      result = numbers[i];
    }
  }
  console.log(result);
}
findMin([8, 3, 11, 2, 5]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log("Ex.18:");
function countOccurrences(arr, word) {
  let countResult = 0;
  if (!Array.isArray(arr)) {
    console.log("Please provide a valid array");
    return;
  }
  if (arr.length === 0) {
    return undefined;
  }
  if (typeof word !== "string") {
    console.log("Please provide a valid string inputs. ");
    return;
  }
  for (const arrIn of arr) {
    if (arrIn === word) {
      countResult++;
    }
  }
  console.log(countResult);
}
countOccurrences(
  ["JavaScript", "harika", "bir", "dil", "JavaScript", "Unreal"],
  "JavaScript",
);

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Ex.19:");
function removeFalsyValues(arr) {
  if (!Array.isArray(arr)) {
    console.log("Please provide a valid array.");
    return;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeFalsyValues([0, 1, false, 2, "", 3, null, "JavaScript", undefined, NaN]);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Ex.20:");
function sumDigits(str) {
  if (typeof str !== "string") {
    console.log("Please provide a valid string inputs.");
    return;
  }
  let result = str.split("");
  let sumTotal = 0;
  for (const newResult of result) {
    let parsedNumber = Number(newResult);
    if (newResult !== " " && !Number.isNaN(parsedNumber)) {
      sumTotal += parsedNumber;
    }
  }
  console.log(sumTotal);
}
sumDigits("abc1234");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Ex.21:");
function averageArray(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Please provide a valid array.");
    return;
  }
  if (numbers.length === 0) {
    return undefined;
  }
  let result = 0;
  let validNumberCount = 0;
  for (const number of numbers) {
    if (typeof number === "number" && !Number.isNaN(number)) {
      result += number;
      validNumberCount++;
    }
  }
  let averageResult = result / validNumberCount;
  console.log(averageResult);
}
averageArray([2, 4, 6, 8, "test", 10, "str"]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Ex.22:");
function flattenArray(twoDArray) {
  if (!Array.isArray(twoDArray)) {
    console.log("Please provide a valid array.");
    return;
  }
  let result = [];
  for (const newArray of twoDArray) {
    for (const item of newArray) {
      result.push(item);
    }
  }
  console.log(result);
}
flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Ex.23:");
function findWordsWithLetter(words, letter) {
  if (!Array.isArray(words)) {
    console.log("Please provide a valid array.");
    return;
  }
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      result.push(words[i]);
    }
  }
  console.log(result);
}
findWordsWithLetter(["apple", "banana", "cherry", "date"], "a");
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Ex.24:");
function pushPopExample(arr, itemToPush) {
  if (!Array.isArray(arr)) {
    console.log("Please provide a valid array.");
    return;
  }
  let result;
  arr.push(itemToPush);
  console.log(arr);
  result = arr.pop();
  console.log(result);
  console.log(arr);
}
pushPopExample([10, 20, 30], 40);
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log("Ex.25:");
function manageQueue(queue, newPerson) {
  let result;
  queue.push(newPerson);
  console.log(queue);
  result = queue.shift();
  console.log(result);
  console.log(queue);
}
manageQueue(["Ahmet", "Mehmet"], "Ayşe");
/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log("Ex.25:");
function updateTodoList(todoList, startIndex, deleteCount, newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(todoList);
}
updateTodoList(
  ["Ders çalış", "Alışveriş yap", "Spor yap", "E-postaları kontrol et"],
  1,
  2,
  ["Kod yaz(Ödevleri zamanında yap lütfen artık", "Kitap oku"],
);
