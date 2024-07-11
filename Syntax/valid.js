/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const matchingPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char in matchingPairs) {
      stack.push(char);
    } else {
      // the current character is a closing bracket
      let lastOpen = stack.pop();
      if (matchingPairs[lastOpen] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{()}"))
