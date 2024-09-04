let randomNumber = Math.random * 5;

var string;

function switched(randomNumber) {
  switch (randomNumber) {
    case 0:
      console.log("random number is = ", 0);
      break;
    case 1:
      console.log("random number is = ", 1);
      break;
    case 2:
      console.log("random number is = ", 2);
      break;
    case 3:
      console.log("random number is = ", 3);
      break;
    case 4:
      console.log("random number is = ", 4);
      break;
    case 5:
      console.log("random number is = ", 5);
      break;
    default:
      console.log("no random number generated between range");
  }
}
console.log(string);
var outPut = switched(randomNumber);
