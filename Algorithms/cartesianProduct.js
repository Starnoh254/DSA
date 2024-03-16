function cartesianProduct(arr1, arr2) {
  let outer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let n = 0; n < arr2.length; n++) {
      let inner = [];
      inner.push(arr1[i]);
      inner.push(arr2[n]);
      outer.push(inner);
    }
  }
  return outer;
}


console.log(cartesianProduct([1, 2], [3, 4, 5]));
