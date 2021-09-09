import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(/* date */) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (typeof date !== 'object' || typeof date.getMonth !== "function" || !(date instanceof Date)) {
    throw new Error();
  }

  // checks for fake
  const dateCheck = new Date(date.toString());
  if (dateCheck.getFullYear() !== date.getFullYear()) {
    throw new Error();
  }

  const month = date.getMonth();
  if (month < 0) {
    throw new Error();
  } else if (month < 2) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else if (month < 11) {
    return 'autumn';
  } else if (month === 11) {
    return 'winter';
  } else {
    throw new Error();
  }
}
