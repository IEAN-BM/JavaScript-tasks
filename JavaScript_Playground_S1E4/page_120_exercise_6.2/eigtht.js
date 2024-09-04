let Array = ["nice", "great", "good", "perfect", "bad", "sad"];
let number;
let output = Math.random();
output = output * 5;
let random = Math.floor(output);
function Ask() {
  number = prompt("what is your name");
  return number;
}
console.log("Username =", Ask(), " and Remark =", Array[random]);
