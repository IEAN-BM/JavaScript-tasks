var grid = new Array();
let cells = 64;
let i = 0;
var row;
let counter = 0;
for (i = 0; i <= 64; i++) {
  if (i % 8 == 0) {
    if (row != undefined) {
      grid.push(row);
    }
    row = [];
  }
  counter++;
  let temp = counter;
  row.push(temp);
}
console.log(grid);
