/*
 * @Author: your name
 * @Date: 2021-11-23 11:15:33
 * @LastEditTime: 2021-11-23 11:20:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/single.js
 */

class Person {
  constructor(name) {
    this.name = name;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Person('lisi');
    }
    return Person.instance;
  }

  test() {
    console.log('test=====');
  }

}

const person = Person.getInstance();
console.log('person', person);

person.test();
