const CustomError = require("../extensions/custom-error");

/**
 * @param {string} str
 * @param {object} [options]
 * @param {number} [options.repeatTimes]
 * @param {string} [options.separator]
 * @param {string} [options.addition]
 * @param {number} [options.additionRepeatTimes]
 * @param {string} [options.additionSeparator]
 */
module.exports = function repeater(str, options) {
    str = String(str);

    let repeatTimes = 1;
    let additionRepeatTimes = 1;
    let separator = '+';
    let addition = '';
    let additionSeparator = '|';

    if (options && typeof options === 'object') {
        if (options.hasOwnProperty('repeatTimes')) {
            repeatTimes = Number(options.repeatTimes);
        }
        if (options.hasOwnProperty('additionRepeatTimes')) {
            additionRepeatTimes = Number(options.additionRepeatTimes);
        }
        if (options.hasOwnProperty('separator')) {
            separator = String(options.separator);
        }
        if (options.hasOwnProperty('addition')) {
            addition = String(options.addition);
        }
        if (options.hasOwnProperty('additionSeparator')) {
            additionSeparator = String(options.additionSeparator);
        }
    }

    const res = [];
    for (let i = 0; i < repeatTimes; ++i) {
        res.push(str + Array(additionRepeatTimes).fill(addition).join(additionSeparator));
    }

    return res.join(separator);
};
