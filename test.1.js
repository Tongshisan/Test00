/*
 * @Author: your name
 * @Date: 2021-09-20 15:34:03
 * @LastEditTime: 2021-10-14 18:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/test.1.js
 */
// /*
//  * @Author: your name
//  * @Date: 2021-09-20 15:34:03
//  * @LastEditTime: 2021-10-13 15:09:57
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: /lizhi/test.1.js
//  */


// const func = () => {
//   return {
//     name: 'lisi'
//   }
// }

// console.log(func() === func())

// function bar() {
//   console.log(myName)
// }
// function foo() {
//   var myName = "极客邦"; 
//   bar()
// }
// var myName = "极客时间";
// foo()


// for (var i = 0; i < 9; i++) {
//   console.log('i=', i);
// }


// for (var i = 0; i < 9; i++) {
//   setTimeout(() => {
//     console.log('i=', i);
//   }, 1000);
// }




function setOpts(opts) {
  opts.cat ??= 'lisi';
  opts.dog ??= '张三';
}

setOpts({
  cat: '李四'
})
