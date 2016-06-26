# Softmax Function

Creates a normalized exponential array from an array of numbers.

## Example

The function is compatible with CommonJS and AMD. The softmax function will also be available on the global object *(window, global, this, etc.)*

### HTML

```html
<script src="softmax.js" type="text/javascript"></script>
<script type="text/javascript">
  let inputs = [1, 2, 4.3],
    outputs = softmax(inputs);
  console.log(outputs);
</script>
```

### CommonJS

```javascript
let softmax = require('softmax-fn');
  inputs = [1, 2, 4.3],
  outputs = softmax(inputs);
console.log(outputs);
```
### AMD

```javascript
define(['softmax-fn'], function(softmax) {
    inputs = [1, 2, 4.3],
  outputs = softmax(inputs);
  console.log(outputs);
});
```

### Output
All of the previous examples have the same output.
```javascript
[
  0.03243497033829723,
  0.08816739047720148,
  0.8793976391845013
]
```
## Links
- Github: [Softmax](https://github.com/lewismoten/softmax)
- Github Page: [Softmax](https://lewismoten.github.io/softmax)
- Wikipedia: [Softmax Function](https://en.wikipedia.org/wiki/Softmax_function)
