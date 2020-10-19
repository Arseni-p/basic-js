const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  let count = 0;
  let cat = '^^';

  for (let i = 0; i < matrix.length; i++) {
    let currItem = matrix[i];
    currItem.forEach(item => {
      if (item == cat) count++
    })
  }
  return count;

};
//countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3