const getRotatePoint = (point, o, deg) => {
  const d = getDistance(point, o);
  const k = (point.y - o.y) / (point.x - o.x);
  let sitaA = Math.atan(k);
  if (Math.abs(point.x - o.x) === 0) {
    sitaA = (Math.PI / 2) * (point.y - o.y > 0 ? 1 : -1);
  }
  if (point.x - o.x < 0) {
    sitaA -= Math.PI;
  }
  const sitaO = sitaA + (Math.PI * deg) / 180;
  return {
    x: o.x + d * Math.cos(sitaO),
    y: o.y + d * Math.sin(sitaO),
  };
}

const getDistance = (p0, p1) => {
  return Math.sqrt((p0.x - p1.x) ** 2 + (p0.y - p1.y) ** 2);
}

const getMidPoint = (point0, point1) => {
  let x, y;
  if (point0.x > point1.x) {
    if (point0.y > point1.y) {
      x = point0.x - (point0.x - point1.x) / 2;
      y = point0.y - (point0.y - point1.y) / 2;
    } else {
      x = point0.x - (point0.x - point1.x) / 2;
      y = point1.y - (point1.y - point0.y) / 2;
    }
  } else {
    if (point0.y > point1.y) {
      x = point1.x - (point1.x - point0.x) / 2;
      y = point0.y - (point0.y - point1.y) / 2;
    } else {
      x = point1.x - (point1.x - point0.x) / 2;
      y = point1.y - (point1.y - point0.y) / 2;
    }
  }
  return {
    x,
    y
  }
}

const point = {x: 10, y: 9};
const o = {x: 0, y: 0};

// console.log(getRotatePoint(point, o, 180));

const p0 = {x: 1, y: 30};
const p1 = {x: 2, y: 20};
console.log(getMidPoint(p0, p1))
