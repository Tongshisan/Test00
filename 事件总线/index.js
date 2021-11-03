/*
 * @Author: your name
 * @Date: 2021-10-13 15:32:24
 * @LastEditTime: 2021-10-13 15:57:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/Test00/事件总线/index.js
 */
class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    const tasks = this.cache[name];
    if (!!tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 创建副本, 如果回调函数内继续注册相同事件, 会造成死循环
      const tasks = this.cache[name].slice();
      for (const fn of tasks) {
        fn(...args);
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

const eventBus = new EventEmitter();

const fn1 = (props) => {
  const { name, age } = props;
  console.log(`我是 fn1, ${name} ${age}`);
}

const fn2 = (props) => {
  const { name, age } = props;
  console.log(`我是 fn2, ${name} ${age}`)
}

const fn3 = (props) => {
  const { name, age } = props;
  console.log(`fn3: ${name}`);
}

eventBus.on('aaa', fn1);
eventBus.on('aaa', fn2);
eventBus.on('aaa', fn3);

eventBus.emit('aaa', false, {
  name: 'lisi',
  age: 12
})
