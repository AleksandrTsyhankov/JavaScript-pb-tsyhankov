/*####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```*/

const arr = [1, 2, 3];

function filter(arr, cb) {
  if (!Array.isArray(arr)) {
    throw new Error('arr type should be an array');
  };
if (typeof cb !== 'function') {
    throw new Error('cb type should be a function');
  };

  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    if (cb(arr[i], i, arr) !== false) {
      newArr.push(arr[i]);
    };
  };

  return newArr;
};

function cb(item, i, arr) {
  if (item < 3) {                        /*условие*/
    console.log(item, i, arr);
    return item, i, arr
  }
  return false;
}

const result = filter(arr, cb);

console.log(result);