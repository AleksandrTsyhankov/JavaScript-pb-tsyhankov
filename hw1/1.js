/*####Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
```
*/
const a = 1;
const b = 2;

const result = a + b < 4 ? true : false;
console.log(result);