/**
 * various_parameter.js
 * for a given string
 * tell me it has even number of characters or not
 */

function evenSizeStr(str) {
  console.log(str);
  let length = str.length;
  console.log(length);
  if (length % 2 === 0) {
    console.log("Even Sized String");
    return true;
  } else {
    console.log("ODD Size");
    return false;
  }
}

let result = evenSizeStr("Hellow this is SAKIB");

function doDoubleOrTripple(number, doDouble) {
  if (doDouble === true) {
    let result = number * 2;
    return result;
  } else {
    let result = number * 3;
    return result;
  }
}

let res = doDoubleOrTripple(10, true);
console.log(res);
res = doDoubleOrTripple(10, false);
console.log(res);

function numOfElements(arr) {
  return arr.length;
}

console.log(numOfElements([10, 0, 1, 90, 100, 78]));
