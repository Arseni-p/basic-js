const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  
  let repeatCount;
  let separatorStr = '+';
  let addPart = options.addition;
  let addRepCount;
  let addSeparator = '|';
  let totalStr;
  let addStr;
  
  ( options.repeatTimes ) ? repeatCount = options.repeatTimes : repeatCount = 0;
  ( options.additionRepeatTimes ) ? addRepCount = options.additionRepeatTimes : addRepCount = 0;

  if ( options.additionSeparator !== undefined ) addSeparator = options.additionSeparator;
  ( addRepCount > 1 ) ? addStr = addPart + addSeparator : addStr = addPart;
  
  for (let i = 1; i < addRepCount; i++) {
    if (i === addRepCount - 1) addSeparator = '';
    addStr +=(addPart + addSeparator)
  }

  
  if ( options.separator !== undefined ) separatorStr = options.separator;
  
  if (addStr && repeatCount > 1) totalStr = str + addStr + separatorStr;
  if (addStr && repeatCount <= 1) totalStr = str + addStr;
  if (!addStr && repeatCount > 1) totalStr = str + separatorStr;
  if (!addStr && repeatCount <= 1) totalStr = str;
  
  for (let i = 1; i < repeatCount; i++) {
    if (i === repeatCount - 1) separatorStr = '';

      (addStr) ? totalStr +=(str + addStr + separatorStr) : totalStr +=(str + separatorStr); 
  }
  
  return totalStr;
};
  