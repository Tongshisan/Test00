const arr = new Array(10000).fill(0);

const t1Start = +new Date();
for (let i = 0; i < arr.length; i++) {
  console.log(i)
}
const t1End = +new Date();

const t2Start = +new Date();
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(i)
}
const t2End = +new Date();

console.log(`循环时间: ${t1End - t1Start}, ${t2End - t2Start} ms `);

