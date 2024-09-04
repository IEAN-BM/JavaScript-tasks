var a = 5;
var b = 12;
function Pythagoras(a, b) {
  const y = a * a + b * b;
  const c = Math.sqrt(y);
  return c;
}
console.log("The hypotenuse of the triangle ", Pythagoras(a, b));
