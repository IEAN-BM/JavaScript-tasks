var myArray = new Array();
function Add(firstNum, secondNum) {
  let result = firstNum + secondNum;
  return result;
}
for (let i = 0; i < 10; i++) {
  let firstNum = i * 5;
  let secondNum = i * i;
  myArray[i] = Add(firstNum, secondNum);
}
console.log(myArray);
