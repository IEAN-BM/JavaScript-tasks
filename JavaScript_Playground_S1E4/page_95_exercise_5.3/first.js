var myWork = new Array();

let i = 0;

for (i = 1; i <= 10; i++) {
  var myLesson = {
    name: "Lesson" + i,
    status: i % 2 ? "true" : "false",
  };
  myWork[i - 1] = myLesson;
}

console.log("Objects are ", myWork);
