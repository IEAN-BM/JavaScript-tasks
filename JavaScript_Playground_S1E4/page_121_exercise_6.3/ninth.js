let number1 = 4;
let number2 = 7;
var operator = "+";
let output;
function calc(number1, number2, operator) {
  if (operator == "+" || operator == "") {
    output = number1 + number2;
    return output;
  } else if (operator == "-") {
    output = number1 - number2;
    return output;
  }
}
console.log(calc(number1, number2, operator));
