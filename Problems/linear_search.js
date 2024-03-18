function linear_search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return 'Target not found';
}

console.log(linear_search([1,2,3,4,5,6,7,8,9,10] , 41))
