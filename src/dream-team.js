const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  throw new CustomError('Not implemented');
  let teamName = '';
  for (let i = 0; i < members.length; i++) {
    let teamItem = members[i];
    if (typeof(teamItem) === 'string' ) {
      
      teamName +=teamItem[0].toUpperCase();
    }
  }

  return teamName.split('').sort().join('');
};
