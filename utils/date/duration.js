const SECOND = 1;

const msToDuration = (ms) => {
  const t = ms / 1000
  const sec = Math.floor(t % 60);
  const min = Math.floor(t / 60 % 60);
  const hour  = Math.floor(t / 60 / 60 % 24);
  const day = Math.floor(t / 60 / 60 / 24 % 30)
  const month = Math.floor(t / 60 / 60 / 24 / 30 % 12);
  const year = Math.floor(t / 60 / 60 / 24 / 30 / 12);
  const o = {};
  o.sec = sec;
  o.min = min;
  o.hour = hour;
  o.day = day;
  o.month = month;
  o.year = year;
  return o;
}

const obj = msToDuration(1000000000000);
console.log('时长', obj);


