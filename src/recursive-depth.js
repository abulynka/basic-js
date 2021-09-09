import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
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
}
