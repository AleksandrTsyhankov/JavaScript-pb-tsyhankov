/*####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```*/

const arr = [1, 2, 3];

function forEach(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('arr type should be an array');
  };
if (typeof cb !== 'function') {
    throw new Error('cb type should be a function');
  };

  for (let i = 0; i < arr.length; i++){
    cb(arr[i], i, arr)
  };
};

function cb(item, i, arr) {
  console.log(item, i, arr);
  return item, i, arr
}

forEach(arr, cb);
