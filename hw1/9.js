/*#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.*/

let arr = [1,2,3,4,5,6];

for (let j = arr.length - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
    if (arr[j] > arr[i]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
    }
  }
};

console.log(arr);