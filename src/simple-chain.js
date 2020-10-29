const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArrow: [],
  
  getLength() {
    return this.chainArrow.length
  },
  addLink(value) {
    this.chainArrow.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ( this.chainArrow[position - 1] === undefined ) {
      this.chainArrow = [];
      throw Error;
    } else {
      this.chainArrow.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    this.chainArrow.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.chainArrow.join('~~');
    this.chainArrow = [];
    return chainString;
  }
};

module.exports = chainMaker;
