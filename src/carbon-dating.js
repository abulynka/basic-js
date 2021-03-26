const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const res = Number.parseInt(sampleActivity);
  if (Number.isNaN(res)) {
    return false;
  }
  if (res <= 0) {
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  if (result < 0) {
    return false;
  }
  return result;
};
