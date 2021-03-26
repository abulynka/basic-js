const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(
      (line) => {
        line.forEach(
            (el) => {
              if (el === '^^') {
                ++counter;
              }
            }
        );
      }
  );
  return counter;
};
