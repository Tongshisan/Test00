/*
 * @Author: your name
 * @Date: 2021-04-06 11:22:18
 * @LastEditTime: 2021-04-06 11:41:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/Test00/babel/index.js
 */
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = 'function getUser() {}';

function updateFuncName(code = '', newName) {
    const AST = esprima.parseScript(code);

    // 转换 AST, 只会遍历 type 属性
    // traverse 有 进入 和 离开 两个钩子函数
    estraverse.traverse(AST, {
        enter(node) {
            // console.log(`enter-node.type: ${node.type}`);
            if (node.type === 'Identifier' && !!newName) {
                node.name = newName;
            }
        },
        leave(node) {
            // console.log(`leave-node.type: ${node.type}`);
        }
    });

    const result = escodegen.generate(AST);
    return result;
}

const newFunc =  updateFuncName(code, 'myFunc');
console.log(newFunc);