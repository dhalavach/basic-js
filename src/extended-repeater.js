const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition;
  if (options.addition === false) {
    addition = "false";
  } else if (options.addition === null) {
    addition = "null";
  } else {
    addition = String(options.addition || "");
  }

  let additionSeparator = String(options.additionSeparator || "|");
  let separator = String(options.separator || "+");

  let temp = (
    str +
    (addition + additionSeparator).repeat(options.additionRepeatTimes - 1) +
    addition +
    separator
  ).repeat(options.repeatTimes - 1);

  let result =
    temp +
    str +
    (addition + additionSeparator).repeat(options.additionRepeatTimes - 1) +
    addition;

  return result;
}

module.exports = {
  repeater,
};
