/*
 * @Author: your name
 * @Date: 2021-04-06 10:41:31
 * @LastEditTime: 2021-04-06 11:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/Test00/代码压缩/index.js
 */

// uglify-js的版本需要为2.x, 3.0之后uglifyjs不再暴露Compressor api
// 2.x的uglify不能自动解析es6，所以这里先切换成es5
// npm install uglify-js@2.x

var UglifyJS = require('uglify-js');

// 原始代码

var code = `var a;
var x = {b: 123};
a = 456;
delete x`

// 通过 uglifyjs 将 code 转化为 ast
var ast = UglifyJS.parse(code);
console.log(ast)
ast.figure_out_scope();

// 转化为一棵更小的 AST 树
compressor = UglifyJS.Compressor();
ast = ast.transform(compressor);
console.log(ast)

// 再把 AST 转化为代码
code = ast.print_to_string();

// var a,x={b:123};a=456,delete x;
console.log(code)
