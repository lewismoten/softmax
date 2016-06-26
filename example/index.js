((root) => {

  'use strict';

  let doc = root.document,
    softmax = root.softmax;

  doc.onreadystatechange = () => {

    if (doc.readyState === 'complete') {

      let el = (a) => doc.getElementById(a),
        resultLabel = el('resultLabel'),
        inputsTextBox = el('inputsTextBox'),
        rootLabel = el('rootLabel'),
        commonJsLabel = el('commonJsLabel'),
        amdLabel = el('amdLabel'),
        generateCode = () => {

          rootLabel.textContent = `let inputs = [${inputsTextBox.value}],
  outputs = softmax(inputs);
console.log(outputs);`;
          commonJsLabel.textContent = `let softmax = require('softmax-fn');
  inputs = [${inputsTextBox.value}],
  outputs = softmax(inputs);
console.log(outputs);`;
          amdLabel.textContent = `define(['softmax-fn'], function(softmax) {
    inputs = [${inputsTextBox.value}],
  outputs = softmax(inputs);
  console.log(outputs);
})`;

          try {

            let rawInput = inputsTextBox.value,
              inputs = rawInput.replace(/,\s+/, ',').split(',').map(Number),
              result = softmax(inputs);

            resultLabel.textContent = result.join(',\n');

          } catch (e) {

            resultLabel.textContent = e;

          }

        };

      inputsTextBox.addEventListener('keyup', generateCode);
      generateCode();

    }

  };

})(this);
