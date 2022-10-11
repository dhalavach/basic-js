const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      let counter = 1;
      while (str.charAt(i) === str.charAt(i + 1)) {
        counter++;
        i++;
      }

      result += counter;
      result += str.charAt(i);
    } else {
      result += str.charAt(i);
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
