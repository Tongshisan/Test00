
interface IPoint {
  x: number;
  y: number
}

interface ILine {
  k: number;
  b: number;
}

/**
 * @description: 根据两点获取直线
 * @param {*}
 * @see {直线方程} Ax + By + C = 0;
 * @see {直线方程} y = kx + b;
 * @see {} k = -(A / B)    b = -(C / B)
 * @return {*} A, B, C, k, b
 */
 export const getStraightLineFromTwoPoint = (point0: IPoint, point1: IPoint) => {
  const A = point1.y - point0.y;
  const B = point0.x - point1.x;
  const C = point1.x * point0.y - point0.x * point1.y;
  const k = - (A / B);
  const b = - (B / C);
  return { A, B, C, k, b };
};


/**
 * @description: 根据一条直线和直线外一点获取平行线方程
 * @param {any} line
 * @param {IPoint} point
 * @return {*}
 */
export const getParallelLine = (line: ILine, point: IPoint): ILine => {
  const { k } = line;
  return {
    k,
    b: point.y - k * point.x,
  };
};

/**
 * @description: 根据一条直线和直线外一点获取垂直线方程
 * @param {ILine} line
 * @param {IPoint} point
 * @return {*}
 */
export const getVerticalLine = (line: ILine, point: IPoint): ILine => {
  const { k: k1 } = line;
  const k = -1 / k1;
  return {
    k: k,
    b: point.y - k * point.x,
  };
};

/**
 * @description: 获取两直线相交点
 * @param {ILine} l1
 * @param {ILine} l2
 * @return {*}
 */
export const getCrossPoint = (l1: ILine, l2: ILine): IPoint | null => {
  const { k: k1, b: b1 } = l1;
  const { k: k2, b: b2 } = l2;
  // 平行返回 null
  if (k1 === k2) {
    return null;
  }
  const x = (b2 - b1) / (k1 - k2);
  return {
    x,
    y: k1 * x + b1,
  };
};


/**
 * @description: 根据两点获取中点坐标
 * @param {IPoint} point0
 * @param {IPoint} point1
 * @return {*} 中点坐标
 */
export const getMidPoint = (point0: IPoint, point1: IPoint): IPoint => {
  let x; let y;
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
    y,
  };
};

/**
 * @description: 计算一个点相对另一个点旋转一定角度后的坐标
 * @param {IPoint} point
 * @param {IPoint} o
 * @param {number} deg
 * @return {*}
 */
export const getRotatePoint = (point: IPoint, o: IPoint = { x: 0, y: 0 }, deg: number): IPoint => {
  const d = getDistanceFromPoint(point, o);
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
};

/**
 * @description: 计算两点距离
 * @param {IPoint} p0
 * @param {IPoint} p1
 * @return {*}
 */
export const getDistanceFromPoint = (p0: IPoint, p1: IPoint): number => {
  return Math.sqrt((p0.x - p1.x) ** 2 + (p0.y - p1.y) ** 2);
};
