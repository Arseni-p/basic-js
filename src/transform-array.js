const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  if (!(Array.isArray(arr))) throw Error; 
  let newArr = [];
 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') newArr.push(arr[i]);
      if (arr[i] === '--discard-next' && arr[i+1] !== undefined /* && i + 1 < arr.length*/) i++;
      if (arr[i] === '--discard-prev' && arr[i-1] !== undefined && arr[i-2] !== '--discard-next') newArr.pop(arr[i-1]);
      if (arr[i] === '--double-next' && arr[i+1] !== undefined) newArr.push(arr[i+1]);
      if (arr[i] === '--double-prev' && arr[i-1] !== undefined && arr[i-2] !== '--discard-next') newArr.push(arr[i-1]);

    }
  
  return newArr;

}
