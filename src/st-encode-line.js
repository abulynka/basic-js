import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str === '') {
    return '';
  }

  let result = '';

  let value = str[0];
  let count = 0;
  str.split('').forEach(
    (e) => {
      if (value === e) {
        ++count;
      } else {
        let add = '';
        if (count > 1) {
          add = count.toString();
        }
        result += add + value;

        value = e;
        count = 1;
      }
    }
  );

  let add = '';
  if (count > 1) {
    add = count.toString();
  }
  result += add + value;

  return result;
}
