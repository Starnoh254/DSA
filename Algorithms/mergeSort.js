function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let left;
    let right;
    let temp = [];
    let middle = Math.floor(arr.length / 2);
    // split array into two halves
    left = mergeSort(arr.slice(0, middle));
    right = mergeSort(arr.slice(middle));
    while (right.length > 0 && left.length > 0) {
      if (right[0] < left[0]) {
        temp.push(right.shift());
      } else {
        temp.push(left.shift());
      }
    }
    if (right.length === 0) {
      temp.push(...left);
    } else {
      temp.push(...right);
    }
    // recursively sort the two halves
    return temp;
  }
}

const array = [8, 20, -2, 4, -6];
console.log(mergeSort(array));
