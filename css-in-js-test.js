/*
 * @Author: your name
 * @Date: 2021-11-24 11:36:37
 * @LastEditTime: 2021-11-24 11:39:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/css-in-js-test.js
 */
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './css-in-js-test.css';
document.body.appendChild(link);

const div = document.createElement('div');
div.classList.add('test-div');
document.body.appendChild(div);
