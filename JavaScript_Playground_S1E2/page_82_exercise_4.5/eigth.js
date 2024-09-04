var prize;
var Number = prize;
var string = "my selection";
function switching(Number, prize) {
  Number = prize;
  switch (Number) {
    case 0:
      console.log(string, "= ", 0);
      break;
    case 1:
      console.log(string, "= ", 1);
      break;
    case 2:
      console.log(string, "= ", 2);
      break;
    case 3:
      console.log(string, "= ", 3);
      break;
    case 5:
      console.log(string, "= ", 5);
      break;
    case 6:
    case 7:
      console.log(string, "= ", 6 + 7);
      // console.log(string, "= ", 7);
      break;
    case 8:
      console.log(string, "= ", 8);
      break;
    case 9:
      console.log(string, "= ", 9);
      break;
    case 10:
      console.log(string, "= ", 10);
      break;
    default:
      console.log(string, "= nothing");
      break;
  }
}
