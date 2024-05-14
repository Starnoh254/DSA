/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) {
    return [];
  }

  let outer_array = [];
  let times = Math.ceil(arr.length / size); // Calculate the number of chunks needed

  for (let i = 0; i < times; i++) {
    let inner_array = [];
    for (let j = i * size; j < Math.min((i + 1) * size, arr.length); j++) {
      inner_array.push(arr[j]);
    }
    outer_array.push(inner_array);
  }

  return outer_array;
};

let array = [8,5,3,2,6]
let size = 6; 

console.log(chunk(array , size))