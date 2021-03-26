const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  /**
   * @param {Boolean} direct
   */
  constructor(direct) {
    this._direct = direct;
    this._alphabet = [...Array(26)].map((q,w) => String.fromCharCode(w+65));
    this._alphabetKeys = {};
    this._alphabet.forEach(
        (value, index) => {
          this._alphabetKeys[value] = index;
        }
    );
    this._square = [];
    for (let i = 0; i < 26; ++i) {
      this._square.push(JSON.parse(JSON.stringify(this._alphabet)));
      this._alphabet.push(this._alphabet.shift());
    }
  }

  /**
   * @param {string} text
   * @param {string} key
   * @returns {string}
   * @private
   */
  _getKey(text, key) {
    return key.toUpperCase().repeat(Math.ceil(text.length / key.length)).substr(0, text.length);
  }

  /**
   * @param {string} plain
   * @param {string} key
   * @return {string}
   */
  encrypt(plain, key) {
    const fullKey = this._getKey(plain, key);
    plain = plain.toUpperCase();
    let counter = 0;
    let result = plain.split('')
        .map(
            (value, index) => {
              const indexA = this._alphabetKeys[value];
              const indexB = this._alphabetKeys[fullKey[counter]];
              if (!this._square.hasOwnProperty(indexA) || !this._square[indexA].hasOwnProperty(indexB)) {
                return value;
              }
              ++counter;
              return this._square[indexA][indexB];
            }
        );
    if (this._direct === false) {
      result = result.reverse();
    }
    return result.join('');
  }

  /**
   * @param {string} encrypted
   * @param {string} key
   * @return {string}
   */
  decrypt(encrypted, key) {
    const fullKey = this._getKey(encrypted, key);
    encrypted = encrypted.toUpperCase();
    let counter = 0;
    let result = encrypted.split('')
        .map(
            (value, index) => {
              const indexB = this._alphabetKeys[fullKey[counter]];
              for (let i = 0; i < this._alphabet.length; ++i) {
                if (this._square[i].hasOwnProperty(indexB) && this._square[i][indexB] === value) {
                  ++counter;
                  return this._alphabet[i];
                }
              }
              return value;
            }
        );
    if (this._direct === false) {
      result = result.reverse();
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
