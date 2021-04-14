/*
 * @Author: lizhi
 * @Date: 2021-04-06 13:16:10
 * @LastEditTime: 2021-04-06 13:21:56
 * @LastEditors: Please set LastEditors
 * @Description: babel 简单运用 --> 箭头函数转普通函数
 * @FilePath: /lizhi/Test00/babel/babel.js
 */
const babel = require('@babel/core');

const code = `const fn = (a, b) => a + b`;


function translationFunc(code = '') {
    const r = babel.transform(code, {
        presets: ['@babel/preset-env']
    })
    return r.code;
}

const newCode = translationFunc(code);
console.log(newCode)