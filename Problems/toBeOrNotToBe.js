/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let value = val;
  return {
    toBe: function (val) {
      if (val === value) {
        return true;
      }
      throw new Error("Not equal");
    },
    notToBe: function (val) {
      if (val !== value) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
