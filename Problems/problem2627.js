/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let time;
  return function (...args) {
    clearTimeout(time);
    time = setTimeout(() => {
      fn(...args);
      console
    }, t);
  };
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
 
