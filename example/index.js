((root) => {

  'use strict';

  let doc = root.document,
    softmax = root.softmax;

  doc.onreadystatechange = () => {

    if (doc.readyState === 'complete') {

      let el = (a) => doc.getElementById(a),
        resultList = el('resultList'),
        inputsTextBox = el('inputsTextBox'),
        htmlCode = el('htmlCode'),
        commonJsCode = el('commonJsCode'),
        amdCode = el('amdCode'),
        generateCode = () => {

          htmlCode.textContent = `<script src="softmax.js" type="text/javascript"></script>
<script type="text/javascript">
  let inputs = [${inputsTextBox.value}],
    outputs = softmax(inputs);
  console.log(outputs);
</script>`;
          commonJsCode.textContent = `let softmax = require('softmax-fn'),
  inputs = [${inputsTextBox.value}],
  outputs = softmax(inputs);
console.log(outputs);`;
          amdCode.textContent = `define(['softmax-fn'], function(softmax) {
  let inputs = [${inputsTextBox.value}],
    outputs = softmax(inputs);
  console.log(outputs);
});`;

          try {

            let rawInput = inputsTextBox.value,
              inputs = rawInput.replace(/,\s+/, ',').split(',').map(Number),
              result = softmax(inputs);

            resultList.textContent = result.join(',\n');

          } catch (e) {

            resultList.textContent = e;

          }

        };

      inputsTextBox.addEventListener('keyup', generateCode);
      generateCode();

    }

  };

})(this);
