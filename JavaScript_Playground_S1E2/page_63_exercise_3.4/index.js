var myCar = {
  name: "BMW",
  driver: "Bob",
  color: "white",
  color: "black",
  forsale: "yes",
  make: function () {
    console.log("company name BMW");
  },
  model: function () {
    console.log("Car model 7th gen");
  },
};
var colour = "color";
console.log(myCar[colour]);
colour = "forsale";
console.log(myCar[colour]);
myCar.make();
myCar.model();
