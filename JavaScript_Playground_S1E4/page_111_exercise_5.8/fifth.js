var string;
let num = 5;
let c = 0;
for (let i = 0; i < 10; i++) {
  if (num == i) {
    continue;
  } else {
    c++;
  }
}
console.log("string" + c);
