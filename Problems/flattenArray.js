const flattenArray = function (array, n) {
  if (n === 0) {
    return array;
  } else {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let unflattendArray = flattenArray(array[i], n - 1);
        result.push(...unflattendArray);
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
};

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

console.log(flattenArray(array , 2))
