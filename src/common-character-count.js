const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  if (s1.length <= s2.length) {
    shorterString = s1;
    longerString = s2;
  } else {
    shorterString = s2;
    longerString = s1;
  }

  let arr1 = shorterString.split("");
  let arr2 = longerString.split("");
  let stack = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      stack.push(arr1[i]);
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }

  //let result = new Set(stack);

  return stack.length;
}
module.exports = {
  getCommonCharacterCount,
};
