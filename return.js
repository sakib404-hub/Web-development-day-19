function tenTimes(number) {
  let result = number * 10;
  return result;
  console.log("Anything"); ///compiler will not reach here beacuse of the return of the result
}

function cutHalf(number) {
  let half = number / 2;
  return half;
}

// calling the tenTimes function
let number = tenTimes(12.25);
console.log(number);

//calling the second function cutHalf
number = cutHalf(500);
console.log(number);
