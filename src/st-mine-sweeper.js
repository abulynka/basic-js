import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const newMatrix = [...Array(matrix.length)].map(() => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (j - 1 >= 0) {
        newMatrix[i][j] += matrix[i][j - 1];
      }
      if (j + 1 < matrix[0].length) {
        newMatrix[i][j] += matrix[i][j + 1];
      }
      if (i - 1 >= 0) {
        newMatrix[i][j] += matrix[i - 1][j];
        if (j - 1 >= 0) {
          newMatrix[i][j] += matrix[i - 1][j - 1];
        }
        if (j + 1 < matrix[0].length) {
          newMatrix[i][j] += matrix[i - 1][j + 1];
        }
      }
      if (i + 1 < matrix.length) {
        newMatrix[i][j] += matrix[i + 1][j];
        if (j - 1 >= 0) {
          newMatrix[i][j] += matrix[i + 1][j - 1];
        }
        if (j + 1 < matrix[0].length) {
          newMatrix[i][j] += matrix[i + 1][j + 1];
        }
      }
    }
  }
  return newMatrix;
}
