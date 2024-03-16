function recursiveBinarySearch(
  arr,
  target,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  if (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (arr[middleIndex] > target) {
      return recursiveBinarySearch(arr, target, leftIndex, middleIndex - 1);
    } else {
      return recursiveBinarySearch(arr, target, middleIndex + 1, rightIndex);
    }
  } else {
    return -1;
  }
}

let sortedArray = [1, 3, 5, 7, 9, 11, 25, 67, 98, 100, 147];
console.log(recursiveBinarySearch(sortedArray, 1478)); // Output: 10


