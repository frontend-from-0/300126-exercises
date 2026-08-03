// 4. Sum of Numbers in a Range (While Loop)
function sumRange(start, end) {
  let sum = 0;
  let i = start;
  while (i <= end) {
    sum += i;
    i++;
  }
  console.log(sum);
}
sumRange(1, 5);   
sumRange(3, 7);   

// 6. Filter Out Negative Numbers
function filterNegative(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      result.push(numbers[i]);
    }
  }
  console.log(result);
}
filterNegative([-1, 5, -3, 0, 8]);

// 8. Print Each Character of a String (For-of)
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("Hello");

// 9. Sum All Values in an Object
function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log(sum);
}
sumObjectValues({ a: 10, b: 20, c: 5 });

// 11. Sum Array Using do-while Loop
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  if (numbers.length === 0) {
    console.log(0);
    return;
  }
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sum);
}
sumWithDoWhile([1, 2, 3, 4]);

// 12. Remove Duplicates from an Array
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeDuplicates([1, 2, 2, 3, 1, 4]);

// 13. Calculate Factorial (For Loop)
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(5); // 120

// 14. String -> Array -> String
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  const result = reversed.join(" ");
  console.log(result);
}
reverseWords("hello world");

// 15. Filter Words Longer Than X
function filterLongWords(words, minLength) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minLength) {
      result.push(words[i]);
    }
  }
  console.log(result);
}
filterLongWords(["hi", "hello", "js", "world"], 3); 

// 16. Log Array Elements with Their Indices
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["a", "b", "c"]);

// 17. Find the Smallest Number in an Array
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
}
findMin([5, 2, 9, 1, 7]); 

// 18. Count Occurrences of a Word in an Array
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}
countOccurrences(["cat", "dog", "cat", "bird"], "cat");

// 19. Remove Falsy Values
function removeFalsyValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeFalsyValues([0, 1, false, "", "hello", null, undefined, NaN, 5]);


// 20. Sum of All Digits in a String
function sumDigits(str) {
  let sum = 0;
  for (const char of str) {
    if (char >= "0" && char <= "9") {
      sum += Number(char);
    }
  }
  console.log(sum);
}
sumDigits("abc123"); // 6

// 21. Average of Array Elements
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(average);
}
averageArray([2, 4, 6, 8]); // 5

// 22. Flatten a 2D Array (Nested Loops)
function flattenArray(twoDArray) {
  const result = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      result.push(twoDArray[i][j]);
    }
  }
  console.log(result);
}
flattenArray([[1, 2], [3, 4], [5]]); 

// 23. Find Words Containing a Letter
function findWordsWithLetter(words, letter) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      result.push(words[i]);
    }
  }
  console.log(result);
}
findWordsWithLetter(["apple", "banana", "cherry"], "a");

// 24. Push and Pop Operations
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log(arr);
  const popped = arr.pop();
  console.log(popped);
  console.log(arr);
}
pushPopExample([1, 2, 3], 4);

// 25. Push and Shift Operations
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log(queue);
  const removed = queue.shift();
  console.log(removed);
  console.log(queue);
}
manageQueue(["Ali", "Veli"], "Ayşe");

// 26. To-Do List Application
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  for (const task of newTasks) {
    todoList.push(task);
  }
  console.log(todoList);
}
updateTodoList(["Task1", "Task2", "Task3"], 1, 1, "NewTask1", "NewTask2");
