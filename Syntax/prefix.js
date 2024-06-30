/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // In this problem , we are going to look at all characters
  // initialize an object to store the occurrence of each character
  if (strs.length === 0) {
    return "";
  }
  let commonPrefix = "";
  let minLength = Math.min(...strs.map((str) => str.length));
  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != char) {
        return commonPrefix;
      }
    }

    commonPrefix += char;
  }

  return commonPrefix;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));