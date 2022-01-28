/*####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```*/

const arr = [1, 2, 3];

function reduce(arr, cb, acc) {
  if (!Array.isArray(arr)) {
    throw new Error('arr type should be an array');
  };
if (typeof cb !== 'function') {
    throw new Error('cb type should be a function');
  };
  if (typeof acc !== 'number' && typeof acc !== 'string') {
    throw new Error('acc type should be a number or string');
  };

  for (let i = 0; i < arr.length; i++){
    acc += cb(arr[i], i, arr)
  };

  return acc;
};

function cb(item, i, arr) {
  return item;
};

let result = reduce(arr, cb, 5);

console.log(result);