/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

let arr = [6, 5, 4, 3, 2, 1];

for (let j = arr.length - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
    if (arr[j] < arr[i]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
    }
  }
};

console.log(arr);