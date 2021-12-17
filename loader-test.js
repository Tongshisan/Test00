/*
 * @Author: your name
 * @Date: 2021-12-01 15:41:52
 * @LastEditTime: 2021-12-01 15:56:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/laoder-test.js
 */
function test(source) {
  const pattern = /const\s+(\S+)\s=\sloadable\(\(\)\s=>\simport\((\S+)\)\);*/g
  console.log(source.replace(pattern, (match, p1, p2) => {
    return  `import ${p1} from ${p2}`;
  }))
}

// test("const ScrollBar = loadable(() => import('@/components/ScrollBar/ScrollBar'));")
test("const ScrollBar = loadable(() => import('@/components/ScrollBar/ScrollBar'));const SymbolMenu = loadable(() => import('./SymbolMenu/SymbolMenu'));const Stage = loadable(() => import('./Stage/Stage'));const ToolBar = loadable(() => import('./ToolBar/ToolBar'));const RightBar = loadable(() => import('./RightBar/RightBar'));const ScriptEditor = loadable(() => import('./ScriptEditor'));const TimeGo = loadable(() => import('./TimeGo'));")
