let word = "1000";
(function () {
  console.log("local variable", word);
})();

(function () {
  let norm = "999";
  console.log("variable", norm);
})();

(function () {
  console.log("I am an anonymous function", nom);
})((nom = "777"));
