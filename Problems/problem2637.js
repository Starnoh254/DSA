/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then((res) => resolve(res))
        .catch((error) => reject(error))
        .finally(() => clearTimeout(id));
    });
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(10).catch(console.log); // "Time Limit Exceeded" at t=100ms
