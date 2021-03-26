const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  /**
   * @param {Array} arr
   * @param currentDepth
   * @returns {number|*}
   */
  calculateDepth(arr, currentDepth) {
    if (typeof currentDepth === "undefined") {
      if (!Array.isArray(arr)) {
        throw new Error();
      } else {
        currentDepth = 0;
      }
    }
    if (!Array.isArray(arr)) {
      return currentDepth;
    } else if (arr.length === 0) {
      return currentDepth + 1;
    } else {
      let maxDepth = 0;
      for (let i = 0; i < arr.length; ++i) {
        maxDepth = Math.max(this.calculateDepth(arr[i], currentDepth + 1), maxDepth);
      }
      return maxDepth;
    }
  }
};
