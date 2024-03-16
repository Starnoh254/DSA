function linearSearch(arr, target) {
  let counter = 0;
  while (counter < arr.length) {
    if (arr[counter] === target) {
      return counter;
    }
    counter++;
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 20));
