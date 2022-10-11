const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n
    .toString()
    .split("")
    .map((e) => parseInt(e));

  function sum(array) {
    let result = array.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });

    return result;
  }

  function splitNumber(num) {
    return num
      .toString()
      .split("")
      .map((e) => parseInt(e));
  }

  while (arr.length > 1) {
    let temp = sum(arr);
    arr = splitNumber(temp);
  }

  return arr[0];
}

module.exports = {
  getSumOfDigits,
};
