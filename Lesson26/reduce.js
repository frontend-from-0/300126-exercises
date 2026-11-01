/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];
const result = numbersEx1.reduce((acc, val) => acc + val);

console.log("Ex. 1 result", result);

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxNumber = numbersEx2.reduce((max, number) => {
  if (number > max) {
    return number;
  }
  return max;
}, -Infinity);

console.log("Ex. 2 result", maxNumber);

// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ["a", "b", "a", "c", "b", "a"];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

//it creates an object that takes the current value as properties and gives values to them, if the property is already there, it increments by 1, if it is not, it creates a new one with the value of 1, at the end, it return the result object

console.log("Ex. 3 result", elementCounts); // Output: { a: 3, b: 2, c: 1 }

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const average =
  numbersEx4.reduce((acc, val) => acc + val, 0) / numbersEx4.length;
console.log("Ex. 4 result", average);

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];
const numbers = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []).length;

console.log(uniqueCount); // Output: 5

// it creates an empty array, first checks if the current value is in the newly created array, if its not, it puts the value to the array, if it is, it returns the last result, and when the values done, it checks the length of the array
