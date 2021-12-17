/*
 * @Author: your name
 * @Date: 2021-10-15 12:30:39
 * @LastEditTime: 2021-11-11 19:11:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/fs.js
 */

/**
 * @description: 从url 中获取参数, 
 * @param {*}
 * @return {*}
 */
const getUrlParams = (key) => {
	const url = window.location.search;
	const obj = {};
	if (url.indexOf('?') !== -1) {
		const strs = url.slice(1).split('&');
		for (let i = 0, l = strs.length; i < l; i++) {
			const item = strs[i].split('=');
			obj[item[0]] = item[1];
		}
	}
  console.log('obj', obj)
	return obj[key];
};

const getComponentNameFromTypegwt

console.log(getUrlParams('uid'))





getUrlParams =  (key) => {
  const url = window.location.hash;
  const obj = {}
  const index = url.indexOf('?')
  if (index !== -1) {
    const strs = url.slice(index+1).split('&')
    for (let i = 0, len = strs.length; i < len; i++) {
      const item = strs[i].split('=');
      obj[item[0]] = item[1]
    }
  }
  return obj[key]
}
