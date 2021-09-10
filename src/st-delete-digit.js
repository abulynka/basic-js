import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let number = 0;
  const ns = n.toString().split('');
  for (let i = 0; i < ns.length; ++i) {
    let nsCopy = ns.slice();
    nsCopy.splice(i, 1);
    number = parseInt(Math.max(nsCopy.join(''), number));
  }
  return number;
}
