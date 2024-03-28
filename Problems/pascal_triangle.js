function pascalTriangle(n) {
  if (n <= 1) {
    return [1, 1].slice(0, n + 1);
  } else {
    let row = [];
    let arr = pascalTriangle(n - 1);
    for (let i = 0; i < arr.length - 1; i++) {
      row.push(arr[i] + arr[i + 1]);
    }
    return [1, ...row, 1];
  }
}
console.log(pascalTriangle(2));
console.log(pascalTriangleEff(2));

// a more efficient way of solving the pascal triangle  problem
function pascalTriangleEff(n) {
  let row = [1]
  for (let i = 1; i <= n; i ++){
    row.push(Math.floor((row[row.length - 1] * (n - i + 1)) / i))
    console.log(row)
  }
  return row
}
