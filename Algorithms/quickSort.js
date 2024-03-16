function quickSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    // return quickSort(left).concat([pivot], quickSort(right));
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
}

const array = [-6, 20, 8, -2, 4];
const arraye = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(quickSort(arraye));
