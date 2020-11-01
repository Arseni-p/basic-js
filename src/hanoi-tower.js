const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  
  let move = 2 ** disksNumber - 1;
  let sec = Math.floor(move * 3600 / turnsSpeed);

  let obj = {
    turns: move,
    seconds: sec
  };
  
  return obj;

};
