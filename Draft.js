// Переменные;

// let number = 10;
// const leftBorderWidth = 1;

// Интерполяия;

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Alexander';

// alert(`Привет${user}`);

// Условия;

// if (4 == 9) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// let num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 50) {
//   console.log("Big");
// } else {
//   console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error"); тернарный оператор

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("Неверно");
//     break;
//   case 100:
//     console.log("Неверно");
//     break;
//   case 50:
//     console.log("В точку!");
//     break;
//   default:
//     console.log("Не в этот раз");
//     break;
// }

// Циклы

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// };

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }

//   console.log(i);
// }

// Функции

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num)
// }

// showFirstMessage("Hello Word");
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(3, 15));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello")
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// Методы

// const str = "test"

// // console.log(str[2] = 'd'); не работает

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str)

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// Функции callback

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// Объекты

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// Масивы;

// const arr = [1, 2, 13, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// Передача данных

// let a = 5,
//   b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; //Передаём объект по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "kalambur";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["wordpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "ok"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAaaray = [...array];

// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

// Объектно ориентированное программирование

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof (str));
// // console.log(typeof (strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log('Hello');
//   }
// };

// const john = Object.create(soldier);

// // const john = {
// //   health: 100,
// // };

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// // console.log(john.armor);

// john.sayHello();