const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  //throw new CustomError('Not implemented');
  let seasonMsg = '';
  let seasonNumber;
  if (date == undefined) return 'Unable to determine the time of year!';
  
  if (Object.prototype.toString.call(date) !== '[object Date]') throw Error;

  if (Object.prototype.toString.call(date) === '[object Date]') seasonNumber = date.getMonth();
  if (seasonNumber >= 0 && seasonNumber <= 1 || seasonNumber == 11) seasonMsg = 'winter';
  if (seasonNumber >= 2 && seasonNumber <= 4) seasonMsg = 'spring';
  if (seasonNumber >= 5 && seasonNumber <= 7) seasonMsg = 'summer';
  if (seasonNumber >= 8 && seasonNumber <= 10) seasonMsg = 'autumn';

  return seasonMsg;
};
