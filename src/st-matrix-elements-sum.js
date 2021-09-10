import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const newMatrix = [...Array(matrix[0].length)].map(() => Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      newMatrix[j][i] = matrix[i][j];
    }
  }

  let sum = 0;
  for (let i = 0; i < newMatrix.length; ++i) {
    for (let j = 0; j < newMatrix[i].length; ++j) {
      if (newMatrix[i][j] === 0) {
        break;
      }
      sum += newMatrix[i][j];
    }
  }

  return sum;
}
