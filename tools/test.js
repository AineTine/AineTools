/**
 * 验证电子邮箱格式
 */
function isEmail(value) {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function isPhoneNumber(value) {
	return /^1[3-9]\d{9}$/.test(value)
}
/**
 * 验证是否为中国移动手机格式
 */
function isMobilePhoneNumber(value) {
	return /^134[0-8]\\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\\d{8}$/.test(value)
}
/**
 * 验证中国电信手机格式
 */
function isTelecomPhoneNumber(value) {
	return /^(?:133|153|177|18[019])\\d{8}$/.test(value)
}
/**
 * 验证中国联通手机格式
 */
function isUnicomPhoneNumber(value) {
	return /^(?:13[0-2]|145|15[56]|176|18[56])\\d{8}$/.test(value)
}

/**
 * 验证URL格式
 */
function isUrl(value) {
	return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 */
function isDate(value) {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证ISO类型的日期格式
 */
function isISODate(value) {
	return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
}

/**
 * 验证十进制数字
 */
function isNumber(value) {
	return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
function isDigits(value) {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
function isIdNumber(value) {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value)
}

/**
 * 是否车牌号
 */
function isCarNumber(value) {
	// 新能源车牌
	const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
	// 旧车牌
	const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
	if (value.length === 7) {
		return creg.test(value);
	} else if (value.length === 8) {
		return xreg.test(value);
	} else {
		return false;
	}
}

/**
 * 金额,只允许2位小数
 */
function isAmount(value) {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function isChinese(value) {
	let reg = /^[\u4e00-\u9fa5]+$/gi;
	return reg.test(value);
}

/**
 * 只能输入字母
 */
function isLetter(value) {
	return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function isEnglishOrNumber(value) {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function isContainsStd(value, param) {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
function isInRange(value, param) {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
function isRangeLength(value, param) {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
function isLandline(value) {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
	return reg.test(value);
}

/**
 * 判断是否为空
 */
function isEmpty(value) {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

/**
 * 是否json字符串
 */
function isJson(value) {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}


/**
 * 是否数组
 */
function isArray(value) {
	if (typeof Array.isArray === "function") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/**
 * 是否对象
 */
function isObject(value) {
	return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function isCode(value, len = 6) {
	return new RegExp(`^\\d{${len}}$`).test(value);
}


export default {
	isEmail,
	isPhoneNumber,
	isUrl,
	isDate,
	isISODate,
	isNumber,
	isDigits,
	isIdNumber,
	isCarNumber,
	isAmount,
	isChinese,
	isLetter,
	isEnglishOrNumber,
	isContainsStd,
	isInRange,
	isRangeLength,
	isEmpty,
	isJson,
	isLandline,
	isObject,
	isArray,
	isCode,
	isMobilePhoneNumber,
	isTelecomPhoneNumber,
	isUnicomPhoneNumber,
}
