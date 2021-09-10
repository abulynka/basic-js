import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const s1a = s1.split('');
  const s2a = s2.split('');

  let count = 0;

  s1a.forEach(
    (e) => {
      if (s2a.indexOf(e) !== -1) {
        ++count;
        s2a.splice(s2a.indexOf(e), 1);
      }
    }
  );
  return count;
}
