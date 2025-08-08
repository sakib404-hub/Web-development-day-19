function vaatKhao() {
  console.log("Hand Wash kore Aso");
  console.log("Boso");
  console.log("Plate khabar dabar nau");
  console.log("Aste aste Khau");
}
//callng the function
vaatKhao();

//This is known as parameterized function therefore it will take one or many variable as input
//from the user
function square(number) {
  console.log("Value of the number is : ", number);
  console.log("Square of the number is : ");
  return number * number;
}

let sqr = square(6);
console.log(sqr);
console.log(square(9));
console.log(square(25));
console.log(square(125));

// addiing two number function
function add(numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  console.log("Addition of the two number is : ", sum);
}

/**Adding three
 * number function that adds the two number simultanously
 */
function add(numberOne, numberTwo, numberThree) {
  let sum = numberOne + numberTwo + numberThree;
  console.log("Addition of the three number is : ", sum);
}
