/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const res = [];
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  for (let i = 0; i < rowsCount; ++i) {
    res.push(new Array(colsCount));
  }

  let revOder = false,
    ind = 0;
  for (let j = 0; j < colsCount; ++j) {
    if (!revOder) {
      for (let i = 0; i < rowsCount; ++i) {
        res[i][j] = this[ind++];
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; --i) {
        res[i][j] = this[ind++];
      }
    }
    revOder = !revOder;
  }

  return res;
};

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(nums.snail(2, 10)); // [[1,2,3,4]]
