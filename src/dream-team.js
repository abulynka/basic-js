const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }

  const result = [];

  members.forEach(
      (el) => {
        if (typeof el === 'string') {
          const results = el.match(/^\s{0,}?([A-z]{1})/);

          if (results !== null) {
            result.push(results[1].toUpperCase());
          }
        }
      }
  );

  result.sort();

  if (result.length === 0) {
    return false;
  }

  return result.join('');
};
