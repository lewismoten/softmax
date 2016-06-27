(() => {

  'use strict';

  module.exports = softmax;

  function softmax(values) {

    values.map(checkValue);

    if (values.length === 1) {

      return [1];

    }

    const exponents = values.map(Math.exp),
      total = exponents.reduce(sum, 0);

    return exponents.map(divide, total);

  }

  function sum(augend, addend) {

    return augend + addend;

  }

  function divide(dividend) {

    return dividend / this;

  }

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

  function invalidArgumentMessage(value) {

    return `Invalid argument specified: ${JSON.stringify(value)}`;

  }

})();
