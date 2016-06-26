# Softmax Function

Creates a normalized exponential array from an array of numbers.

```javascript

var softmax = require('softmax-fn'),
  values = [1, -2, 4.3],
  result = softmax(values);

console.log(result);

// outputs the following:
// [0.035508304589586044, 0.0017678543882286575, 0.9627238410221853]
```
