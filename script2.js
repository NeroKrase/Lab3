let number = +prompt("How many rows do you want to see");
let string = "";

function createPascalTriangle (numRows) {
  let pascalTriangle = [];

  for (let i = 0; i < numRows; i++) {
    pascalTriangle[i] = [];

    for (let j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
    string += pascalTriangle[i] + "\n";
  }
  return string;
}

alert(createPascalTriangle(number));
