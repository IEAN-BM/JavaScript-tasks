var Array = ["rock", "paper", "scissors"];
var index = Math.random();
var randomResult;
var comindex = index * 2;
var myindex = 2;

function Checker() {
  if (Array[comindex] == Array[myindex]) {
    console.log("tie");
  } else if (Array[myindex] == Array[0]) {
    if (Array[comindex] == Array[1]) {
      console.log("Computer wins");
    } else if ((Array[comindex] = Array[2])) {
      console.log("I win");
    }
  } else if (Array[myindex] == Array[1]) {
    if (Array[comindex] == Array[0]) {
      console.log("I win");
    } else if ((Array[comindex] = Array[2])) {
      console.log("computer wins");
    }
  } else if (Array[myindex] == Array[2]) {
    if (Array[comindex] == Array[1]) {
      console.log("I win");
    } else if ((Array[comindex] = Array[0])) {
      console.log("computer wins");
    }
  }
}
randomResult = Checker();
