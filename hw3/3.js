/*####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
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
    if (cb(arr[i], i, arr) === false) {
      return false;
    }
  };
  return true;
};

function cb(item, i, arr) {
  if (item < 4) {                        /*условие*/
    return true
  }
  return false;
}

let result = every(arr, cb);

console.log(result);