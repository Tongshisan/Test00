/*
 * @Author: your name
 * @Date: 2021-09-20 15:25:22
 * @LastEditTime: 2021-09-24 14:43:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/test.0.js
 */
// import CryptoJS from 'crypto-js';
const CryptoJS = require('crypto-js');

function DoPermute(M,N) {
	const monkey_num = []; 
		for(let i = 1;i <= M; i++) { 
			monkey_num.push(i); 
		} 
		let step=0; 
		if (N === 1) {
			return monkey_num[monkey_num.length - 1];
		} else {
			while (monkey_num.length > 1) {	
			let Nnum = 0;
			let len = monkey_num.length;
			for (let i = 0; i < len; i++) {
				step++;
				if (step === N) {	
					step=0;
					monkey_num.splice(i-Nnum,1);
					Nnum++;
				}
			}
		}
		 return monkey_num[0];
		}
}; 

const AES_ECB_ENCRYPT = (text, secreKey = '') => {
	const keyHex = CryptoJS.enc.Base64.parse(secreKey);
	const messageHex = CryptoJS.enc.Utf8.parse(text);
	const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	return encrypted.toString();
};

const AES_ECB_DECRYPT = (textBase64, secreKey = '') => {
	const ketHex = CryptoJS.enc.Base64.parse(secreKey);
	const decrypt = CryptoJS.AES.decrypt(textBase64, ketHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
  console.log('解密', textBase64, secreKey)
	return CryptoJS.enc.Utf8.stringify(decrypt);
};

console.log(DoPermute(3, 5))
console.log(AES_ECB_ENCRYPT('草'))
const a = AES_ECB_ENCRYPT('草');
console.log(AES_ECB_DECRYPT(a))
