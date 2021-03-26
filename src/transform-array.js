const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr || typeof arr !== 'object') {
    throw new Error();
  }

  function isControlSymbol(symbol) {
    return symbol === '--discard-next' || symbol === '--discard-prev' || symbol === '--double-next' || symbol === '--double-prev';
  }

  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === '--discard-next') {
      ++i;
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i + 1 < arr.length && !isControlSymbol(arr[i + 1])) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.push(result[result.length - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
