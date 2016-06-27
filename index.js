(() => {

  'use strict';

  module.exports = softmax;

  function softmax(values) {

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

})();
