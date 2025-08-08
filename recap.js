/**
 * we can create a function
 * we can create a function using a parameter
 * we can get the return value from the function, means the function will return something
 */

function add(price1, price2) {
  // with a variable
  let total = price1 + price2;
  return total;
}

let bill = add(15, 90);
console.log(bill);

function add2(price1, price2) {
  // without a variable
  return price1 + price2;
}
let bill2 = add(15, 90);
console.log(bill);

function doMath(numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  let diff = numberOne - numberTwo;
  let div = numberOne / numberTwo;
  let multi = numberOne * numberTwo;
  let modulus = numberOne % numberTwo;
  console.log(`Summiation is ${sum}`);
  console.log(`Substraction is ${diff}`);
  console.log(`Division is ${div}`);
  console.log(`Multiplication is ${multi}`);
  console.log(`Modulus is ${modulus}`);
}

doMath(60, 4);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}
console.log(isEven(10));
console.log(isOdd(10));
