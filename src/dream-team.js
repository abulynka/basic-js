import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
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
}
