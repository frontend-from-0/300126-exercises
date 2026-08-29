/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  let sum = 0;
  while (start <= end) {
    sum += start;
    start++;

  }
  return sum;

}
console.log(sumRange(1, 5));

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  let positiveNumber = [];
  for (let number of numbers) {
    if (number >= 0) {
      positiveNumber.push(number);
    }
  }
  return positiveNumber;
}
let numbers = [-5, -3, -1, 0, 1, 2, 3, 4];
console.log(filterNegative(numbers));


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  for (let char of str) {
    console.log(char);
  }
}
printCharacters("JavaScript");
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  return sum;

}
const values = { a: 10, b: 20, c: 5 }
console.log(sumObjectValues(values));

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

  return total;
}

console.log(sumWithDoWhile([10, 20, 5]));


/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let newArray = [];

  for (let item of arr) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}

// değişken ismini değiştirdik (artık çakışma yok)
let inputNumbers = [1, 2, 2, 3, 1, 4];

console.log(removeDuplicates(inputNumbers));

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

  return result;
}

console.log(factorial(5));
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  let words = sentence.split(" ");
  words.reverse();
  return words.join(" ");
}

console.log(reverseWords("I love JavaScript"));
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      result.push(words[i]);
    }
  }

  return result;
}

console.log(filterLongWords(["apple", "hi", "banana", "cat"], 4));
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Index: " + i + ", Value: " + arr[i]);
  }
}

logElementsWithIndex(["a", "b", "c"]);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

console.log(findMin([5, 2, 9, 1, 7]));
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

  return count;
}

console.log(countOccurrences(["apple", "banana", "apple", "cat"], "apple"));
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeFalsyValues([0, "hello", false, 5, "", null, 10]));
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += Number(str[i]);
    }
  }

  return sum;
}
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

console.log(averageArray([10, 20, 30]));
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  let result = [];

  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      result.push(twoDArray[i][j]);
    }
  }

  return result;
}

console.log(flattenArray([[1, 2], [3, 4]]));
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      result.push(words[i]);
    }
  }

  return result;
}

console.log(findWordsWithLetter(["apple", "banana", "cat", "dog"], "a"));
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
  console.log("After push:", arr);

  let removed = arr.pop();
  console.log("Popped element:", removed);

  console.log("Final array:", arr);
}


pushPopExample([1, 2, 3], 4);
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
  console.log("After push:", queue);

  let removed = queue.shift();
  console.log("Removed person:", removed);

  console.log("Final queue:", queue);
}


manageQueue(["Ali", "Ayşe", "Mehmet"], "Zeynep");
/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {

  console.log("Current list:", todoList);


  todoList.splice(startIndex, deleteCount);


  todoList.push(...newTasks);

  console.log("Updated list:", todoList);
}


updateTodoList(
  ["study", "eat", "sleep", "code"],
  1,
  2,
  "gym", "read"
);