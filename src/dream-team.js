const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !(typeof members[Symbol.iterator] === "function")) {
    return false;
  }
  let firstLetters = [];
  for (e of members) {
    if (!(!e || !(typeof e === "string"))) {
      firstLetters.push(e.toString().replace(/\s*/g, "")[0].toUpperCase());
    }
  }

  return firstLetters.sort().join("");
}

module.exports = {
  createDreamTeam,
};
