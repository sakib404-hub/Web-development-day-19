function double(number) {
  //Here is the parameter
  let double = number * 2;
  console.log(number, double);
}

console.log("Now, I will call the Function");
double(10); //and this is known as the arguments
console.log("-------------------------");
double(125);
console.log("-------------------------");
double(800);
console.log("-------------------------");
let number = 112;
double(number);

function diff(numberOne, numberTwo) {
  let differ = numberOne - numberTwo;
  console.log("The difference between the two number is : ", differ);
}

let fatherAge = 40;
let sonAge = 20;
diff(fatherAge, sonAge);
