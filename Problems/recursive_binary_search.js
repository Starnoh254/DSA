function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return recursiveBinarySearch(arr, target, left, mid - 1);
    } else {
      return recursiveBinarySearch(arr, target, mid + 1, right);
    }
  } else {
    return -1;
  }
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
