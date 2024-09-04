var Age = Number;
console.log("enter your age");

function checkAge(Age) {
  if (Age >= 21) {
    console.log("Enter the venue you are eligible to purchase alcohol");
  } else if (Age >= 19) {
    console.log("Enter the venue but you are not allowed to purchase alcohol");
  } else {
    console.log("you are not eligible to enter the venue");
  }
}
