const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  let result = {};

  let turns = Math.pow(2, disks) - 1;

  let seconds = (turns / turnsSpeed) * 3600;
  result.seconds = Math.floor(seconds);
  result.turns = turns;
  return result;
}

module.exports = {
  calculateHanoi,
};
