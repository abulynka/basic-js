import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    if (typeof value === 'undefined') {
      value = '';
    }
    this._chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (position && typeof position === 'number' && 0 < position <= this._chain.length) {
      this._chain.splice(position - 1, 1);
      return this;
    }
    this._chain = [];
    throw new Error();
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const result = '( ' + this._chain.join(' )~~( ') + ' )';
    this._chain = [];
    return result;
  }
};

