var myArray = new Array();
myArray = ["Milk", "Bread", "Apple"];
myArray[1] = "Banana";
myArray[2] = "Eggs";
console.log("Array element", myArray);
var myArray1 = myArray.sort();
let index = myArray1.indexOf("Milk");
console.log("index of milk is ", index);
myArray[2] = "carrots";
myArray[3] = "lettuce";
myArray[4] = "Milk";
var myArray2 = new Array(2);
myArray2 = ["juice", "pop"];
var myArray3 = new Array();
myArray3 = myArray3.concat(myArray, myArray2, myArray2);
console.log(myArray3);
let lastindex = myArray3.lastIndexOf("pop");
console.log("Last index of pop", lastindex);
