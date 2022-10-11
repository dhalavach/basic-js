const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberString = n.toString();
  let allPossibleNumbers = [];
  function removeCharAt(string, index) {
    let temp = string.split(""); // convert to an array
    temp.splice(index, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return temp.join(""); // reconstruct the string
  }

  for (i = 0; i < numberString.length; i++) {
    allPossibleNumbers.push(parseInt(removeCharAt(numberString, i)));
  }

  return Math.max(...allPossibleNumbers);
}

module.exports = {
  deleteDigit,
};
