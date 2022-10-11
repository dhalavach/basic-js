const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let pastActivity = parseFloat(sampleActivity);

  if (
    !sampleActivity ||
    Number.isNaN(pastActivity) ||
    pastActivity < 0 ||
    pastActivity > 15 ||
    pastActivity === 0 ||
    typeof sampleActivity !== "string"
  ) {
    return false;
  }

  return Math.ceil(
    HALF_LIFE_PERIOD *
      (Math.log(pastActivity / MODERN_ACTIVITY) / Math.log(0.5))
  );
}

module.exports = {
  dateSample,
};
