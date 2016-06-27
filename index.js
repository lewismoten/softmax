(() => {

  'use strict';

  module.exports = (values) => {

    const exponents = values.map(Math.exp),
      total = exponents.reduce((a, b) => a + b, 0);

    return exponents.map((exp) => exp / total);

  };

})();
