import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const map = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === -1) {
      map.push(i);
    }
  }

  while (arr.indexOf(-1) !== -1) {
    arr.splice(arr.indexOf(-1), 1);
  }

  arr.sort((a, b) => a -b);
  map.forEach(
    (e) => {
      arr.splice(e, 0, -1);
    }
  );

  return arr;
}
