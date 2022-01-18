/*####Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
```*/

const val = 3;
const a = 1;
const b = 1;
const c = 1;
const d = 1;
const e = 2;

if (val === a) {
  console.log(a);
} else if (val === b || val === b || val === c || val === d || val === e) {
  console.log('others');
} else {
  console.log('unknown');
};
