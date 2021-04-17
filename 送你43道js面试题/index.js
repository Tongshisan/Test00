/*
 * @Author: your name
 * @Date: 2021-04-17 19:12:04
 * @LastEditTime: 2021-04-17 21:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/Test00/送你43道js面试题/index.js
 */

// 1. 下面代码输出什么?
//  function sayHi() {
//      console.log(name)
//      console.log(age)
//      var name  = 'lisi';
//      let age = 12
//  }

//  sayHi()

// undefined
// ReferenceError


// 2. 下面代码输出是什么

//  for (var i = 0; i < 3; i++) {
//      setTimeout(() => console.log(i), 1)
//  }

//  for (let i = 0; i < 3; i++) {
//      setTimeout(() => console.log(i), 1)
//  }

// 3 3 3
// 0 1 2


// 3. 下面代码输出是什么

//  const shape = {
//      radius: 10,
//      diameter() {
//          return this.radius * 2
//      },
//      perimeter: () => 2 * Math.PI * this.radius
//  }

// shape.diameter();
// shape.perimeter();

// 20
// NaN
// 解析下第二个
// 因为 perimeter 是箭头函数, this 指向其实是 window, 是 undefined


// 4.下面代码输出

// +true;
// !"Lydia";

// 1
// false



// 5. 下面哪个选项是不正确的
// const bird = {
//     size: "small"
// };

// const mouse = {
//     name: "Mickey",
//     small: true
// };

// A: mouse.bird.size
// B: mouse[bird.size]
// C: mouse[bird["size"]]
// D: All of them are valid

// A




// 6. 下面代码输出是什么
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// Hello





// 7. 下面代码输出是什么
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// true
// false
// false

// 解析: b 是一个对象, 它的值是 3,  a == b 会发生隐式类型转换, 调用 valueOf 






// 8. 下面代码输出是什么
// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//     }

//     constructor({ newColor = "green" } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");

// TypeError

// 解析: colorChange 是 class Chameleon 的 静态方法, 只能  Chameleon.colorChange




// 9. 下面代码输出什么
// let greeting;
// greetign = {};
// console.log(greetign);

// {}
// greetign 会创建一个全局变量





// 10. 这么做会发送什么

// function bark() {
//     console.log("Woof!");
// }

// bark.animal = "dog";

// 什么也不会发生, 以为函数也是对象, 是可以的





// 11. 下面代码输出什么

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = () => this.firstName + this.lastName;

// console.log(member.getFullName());

// getFullName is not a function
// Person.prototype.getFullName 就可以



// 12.下面代码输出什么
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

// {firstname: Lydia, lastName: Hallie}
// undefined

// 解析: 没有用 new , 直接调用 Person 函数, Person 返回 undefined




// 13. 事件传播的三个阶段

// 捕获 --> 目标 --> 冒泡




// 14.所有对象都有原型

// 错误 








// 15. 下面代码的输出是什么
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, "2"))

// '12'






// 16.下面代码输出是什么
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// 0
// 2
// 2




// 17. 下面代码输出是什么
// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

// [ '', ' is ', ' years old' ]
// Lydia
// 21

// 如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。 其余参数获取传递到模板字符串中的表达式的值！






// 18.下面代码输出是什么

// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//         console.log("You are still an adult.");
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`);
//     }
// }

// checkAge({ age: 18 });

// Hmm.. You don't have an age I guess







// 19.下面代码输出是什么
// function getAge(...args) {
//     console.log(args)
//     console.log(typeof args);
// }

// getAge(21);

// [21]
// object
// ...args 返回一个带参数的数组, typeof Array === object






// 20.下面代码输出是什么
// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
// }

// getAge();

// ReferenceError
// 严格模式变量必须先声明





// 21.下面代码输出是什么
// const sum = eval("10*10+5");
// console.log(sum)
// 105





// 22. cool_secret可以访问多长时间?
// sessionStorage.setItem("cool_secret", 123);
// 用户关闭选项卡时。




// 23.下面代码输出是什么
// var num = 8;
// var num = 10;

// console.log(num);

// 10






// 24.下面代码输出是什么
// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))
// console.log(set.has("1"))
// console.log(set.has(1))

// true
// true
// false
// true

// 所有对象键（不包括Symbols）都会被存储为字符串，即使你没有给定字符串类型的键。 这就是为什么obj.hasOwnProperty（'1'）也返回true。
// 上面的说法不适用于Set。 在我们的Set中没有“1”：set.has（'1'）返回false。 它有数字类型1，set.has（1）返回true。




// 25.下面代码输出是什么
// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// { a: 'three', b: 'two' }
// 解析: 如果对象有两个具有相同名称的键，则将替前面的键。它仍将处于第一个位置，但具有最后指定的值。




// 26.JavaScript全局执行上下文为你创建了两个东西:全局对象和this关键字.
// 对
// 基本执行上下文是全局执行上下文:它是代码中随处可访问的内容。



// 27.下面代码输出是什么
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// 1 2 4





// 28. 下面代码输出是什么
// String.prototype.giveLydiaPizza = () => {
//     return "Just give Lydia pizza already!";
// };

// const name = "Lydia";

// console.log(name.giveLydiaPizza())

// Just give Lydia pizza already!






// 29.下面代码输出什么
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// console.log(a)
// a[c] = 456;
// console.log(a)

// console.log(a[b]);


// 对象键自动转换为字符串
// a[b] = 123   相当于   a['[Object object]'] = 123
// a[c] = 123   相当于   a['[Object object]'] = 456
// a[b]    相当于   a['[Object object]']     456





// 30.下面代码输出是什么
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// First  Third   Second



// 31.单击按钮时 event.target 是什么
{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */}

// button






// 32. 单击下面片段打印什么
{/* <div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div> */}

// p   div
// 事件处理程序在冒泡阶段执行





// 33.下面代码输出什么
// const person = { name: "Lydia" };

// function sayHi(age) {
//   console.log(`${this.name} is ${age}`);
// }

// sayHi.call(person, 21);
// sayHi.bind(person, 21);

// Lydia is 21
// function

// bind 返回一个函数






// 34. 下面代码输出什么
// function sayHi() {
//     return (() => 0)();
// }

// console.log(typeof sayHi())

// number
// 解析: sayHi() 返回 立即执行函数的返回的值 0






// 35.下面的值哪些是虚值
// 0;
// new Number(0);
// ("");
// (" ");
// new Boolean(false);
// undefined;


// 0   ("")    undefined
// 函数构造函数都是真值





// 36.下面代码输出什么
// console.log(typeof typeof 1);
// string




// 37. 下面代码输出什么
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
//[1, 2, 3, empty*7, 11]




// 38.下面代码输出什么
// (() => {
//     let x, y;
//     try {
//         throw new Error();
//     } catch (x) {
//         (x = 1), (y = 2);
//         // 1
//         console.log(x);
//     }
//     // undefined
//     console.log(x);
//     // 2
//     console.log(y);
// })();

// catch 里的 x = 1, 属于是给 参数 x 赋值, 属于 catch 作用域
// 所以 外层的 x 是 undefined, y 是 2




// 39. JavaScript中的所有内容都是...原始或对象




// 40.下面代码输出什么
// const arr = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//         return acc.concat(cur);
//     },
//     [1, 2]
// );
// console.log(arr)
// [1, 2, 0, 1, 2, 3]




// 41.下面代码输出什么
// !!null;
// !!"";
// !!1;

// false
// false
// true




// 42. setInterval 返回值是什么
// setInterval(() => console.log("Hi"), 1000);

// 一个唯一的 id




// 43.下面代码的返回值是什么
// [..."Lydia"];

// ['L', 'y', 'd', 'i', 'a']