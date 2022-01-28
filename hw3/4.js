/*####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```*/

const arr = [1, 2, 3];

function every(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('arr type should be an array');
  };
if (typeof cb !== 'function') {
    throw new Error('cb type should be a function');
  };

  for (let i = 0; i < arr.length; i++){
    if (cb(arr[i], i, arr) === true) {
      return true;
    }
  };
  return false;
};

function cb(item, i, arr) {
  let res = false;
  if (item === 2) {                        /*условие*/
    res = true;
    return res;
  }
  return res;
}

let result = every(arr, cb);

console.log(result);