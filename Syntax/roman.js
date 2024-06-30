/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let sum = 0;
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];

    if (symbols[curr] < symbols[next]) {
      sum -= symbols[curr];
    } else {
      sum += symbols[curr];
    }
  }

  return sum;
};
console.log(romanToInt("IX"))