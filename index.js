(() => {

  'use strict';

  module.exports = softmax;

  /**
  * Softmax
  * @param {number[]} values  A list of numbers ranging from -10 to 10
  * @return {number[]}        The normalized list of entries between 0 and 1
  *                           where the sum is 1.
  */
  function softmax(values) {

    values.map(checkValue);

    if (values.length === 1) {

      return [1];

    }

    const exponents = values.map(Math.exp),
      total = exponents.reduce(sum, 0);

    return exponents.map(divide, total);

  }

  /**
  * Sum
  * @param {number} augend  The number to whcih an addend is added.
  * @param {number} addend  A number that is added to another.
  * @returns {number}       The sum
  */
  function sum(augend, addend) {

    return augend + addend;

  }


  /**
  * Divide
  ** @this {number}           The divisor
  * @param {number} dividend  The number to be divided
  * @returns {number}         The quotient
  */
  function divide(dividend) {

    return dividend / this;

  }

  /**
  * Checks the value to determine if it is valid
  * @param {*} value                  The value
  * @throws {invalidArgumentMessage}  The value must be a number in-range
  * @returns {undefined}
  */
  function checkValue(value) {

    if (typeof value !== 'number') {

      throw invalidArgumentMessage(value);

    }

    switch (value) {

      case Infinity:
      case -Infinity:
      case Number.MAX_VALUE:
      case -Number.MAX_VALUE:
        throw invalidArgumentMessage(value);

      default:

    }

  }

  /**
  * An invalid argument message
  * @param {*} value    The value of the argument
  * @returns {string}   The message indicating that the value is invalid.
  */
  function invalidArgumentMessage(value) {

    return `Invalid argument specified: ${JSON.stringify(value)}`;

  }

})();
