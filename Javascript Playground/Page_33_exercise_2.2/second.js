var myName = "Ewimbi Iean";
const Age = 18;
let knowJS = "true";
console.log(
  "Hello my name is",
  myName,
  "i am",
  Age,
  "years old and",
  ConVert()
);
function ConVert() {
  if (Boolean(knowJS)) {
    return "I can code Javascript";
  } else {
    return "I cannot know JavaScript";
  }
}
