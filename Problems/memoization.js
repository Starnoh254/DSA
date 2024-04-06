/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let input = {};

  return function (...args) {
    if (input[args] in input) {
      input[args] = fn(args);
    } else {
      return input[args];
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
