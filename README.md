# Softmax Function

The Softmax function

## Example

```javascript
let softmax = require('softmax-fn');

softmax([1]);
// [1]

softmax([1, 2, 4.3]);
// [0.03243497033829723, 0.08816739047720148, 0.8793976391845013]
```
## Installation
```
$ npm install softmax-fn
```
## API
```javascript
var softmax = require('softmax-fn');
```
### softmax(values)
- parameter *{number[]}* values: A list of numbers ranging from -10 to 10.
- returns *{number[]}*: A normalized list of entries between 0 and 1 where the sum is 1.

## Links
- Github: [Softmax](https://github.com/lewismoten/softmax)
- Wikipedia: [Softmax Function](https://en.wikipedia.org/wiki/Softmax_function)
