/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function (obj) {
  return Object.keys(obj).length === 0 ? true : false;
};

const obj = []
console.log(isEmpty(obj))