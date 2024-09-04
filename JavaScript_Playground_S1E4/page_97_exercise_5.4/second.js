var myTable = new Array();
var templateTable = [];
let i = 0;
let j = 0;
for (i = 0; i < 5; i++) {
  templateTable.push([]);
  for (j = 0; j < 5; j++) {
    templateTable[i].push(i + j);
  }
}
myTable = templateTable;
console.log(myTable);
