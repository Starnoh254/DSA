function generate(numRows) {
  let pascalsTriangle = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = pascalsTriangle[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    pascalsTriangle[i] = row;
  }

  return pascalsTriangle;
}

console.log(generate(5))
