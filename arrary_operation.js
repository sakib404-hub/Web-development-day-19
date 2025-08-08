/**
 * Objective : Write a Function to give me sum of all numbers in an array
 */

function sumOfNumbers(arr) {
  console.log(arr);
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

let sumi = sumOfNumbers([10, 20, 30, 40, 50]);
console.log(`Sum of the numbers is ${sumi}`);

/**
 * Objective : Write a function for determining even numbers from a function
 */
function evenNumbers(arr) {
  let even = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}

let numbers = evenNumbers([10, 20, 33, 50, 29, 50, 70, 77]);
console.log(numbers);
