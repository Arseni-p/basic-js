const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let natural = 0.693;

  if ( typeof(sampleActivity) !== 'string' || isNaN(+sampleActivity) || +sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0 ) {
    return false
  } else {
    return Math.ceil(Math.log((MODERN_ACTIVITY / sampleActivity) / (natural / HALF_LIFE_PERIOD)))
  }   
};
