// 此功能目前由dayjs实现，感谢大佬的代码
var dayjs = require('dayjs')

// 获取当前时间
const now = () => {
	// console.log("dayJS",dayjs)
	return dayjs
}

// 格式化时间
// 默认为：YYYY年MM月DD日 HH时mm分ss秒 
/*
-----------------------------------------
名称			取值				描述
-----------------------------------------
YY			18				年，两位数
YYYY		2018			年，四位数
M			1-12			月，从1开始
MM			01-12			月，两位数字
MMM			Jan-Dec			月，英文缩写
D			1-31			日
DD			01-31			日，两位数
H			0-23			24小时
HH			00-23			24小时，两位数
h			1-12			12小时
hh			01-12			12小时，两位数
m			0-59			分钟
mm			00-59			分钟，两位数
s			0-59			秒
ss			00-59			秒，两位数
S			0-9				毫秒（百），一位数
SS			00-99			毫秒（十），两位数
SSS			000-999			毫秒，三位数
Z			-05:00			UTC偏移
ZZ			-0500			UTC偏移，两位数
A			AM / PM			上/下午，大写
a			am / pm			上/下午，小写
Do			1st... 31st		月份的日期与序号

*/
const format = (datetime, format = 'YYYY年MM月DD日 HH时mm分ss秒') => {
	return dayjs(datetime).format(format)
}

// 判断指定日期是否为工作日 (必须链接到网络)
const isWorkDay = () => {

}

// 将字符串转换为Datetime对象
// 如果为时间戳，必须以数字形式传递
const toDatetime = (str) => {
	return new dayjs(str);
}

// 获取年
const getYear = (date) => {
	return dayjs(date).get('year')
}
// 获取月
const getMonth = (date) => {
	return dayjs(date).get('month')
}
// 获取日
const getDay = (date) => {
	return dayjs(date).get('date')
}
// 获取时
const getHour = (date) => {
	return dayjs(date).get('hour')
}
// 获取分
const getMinute = (date) => {
	return dayjs(date).get('minute')
}
// 获取秒
const getSecond = (date) => {
	return dayjs(date).get('second')
}
// 获取毫秒
const getMilliSecond = (date) => {
	return dayjs(date).get('millisecond')
}

// 是否为昨天
const isYesterday = (str) => {
	var isYesterday = require('dayjs/plugin/isYesterday')
	dayjs.extend(isYesterday)
	return dayjs(str).isYesterday()
}

// 是否为今天
const isToday = (str) => {
	var isToday = require('dayjs/plugin/isToday')
	dayjs.extend(isToday)
	return dayjs(str).isToday()
}

// 是否为明天
const isTomorrow = (str) => {
	var isTomorrow = require('dayjs/plugin/isTomorrow')
	dayjs.extend(isTomorrow)
	return dayjs(str).isTomorrow()
}

/*
 -----------------
 单位格式
 -----------------
week			w			周
day				d			星期(星期日0，星期六6)
month			M			月份(0-11)
quarter			Q			依赖QuarterOfYear插件
year			y			年
hour			h			小时
minute			m			分钟
second			s			秒
millisecond		ms			毫秒

*/
// 是否为指定天前或指定天后(正数代表指定日期之后，负数代表指定日期之前)，可通过unit配置单位
const isTodayAround = (datetime, interval, unit = 'day') => {
	var isToday = require('dayjs/plugin/isToday')
	dayjs.extend(isToday)
	if (interval < 0)
		return dayjs(datetime).add(Math.abs(interval), unit).isToday()
	return dayjs(datetime).subtract(Math.abs(interval), unit).isToday()
}

// 指定日期前或指定日期后的日期
const dateInterval = (datetime, interval, unit = 'day') => {
	if (interval > 0)
		return dayjs(datetime).add(Math.abs(interval), unit)
	return dayjs(datetime).subtract(Math.abs(interval), unit)
}

export default {
	now,
	toDatetime,
	format,
	isWorkDay,
	isToday,
	isTodayAround,
	isTomorrow,
	isYesterday,
	getYear,
	getMonth,
	getDay,
	getHour,
	getMinute,
	getSecond,
	getMilliSecond,
	dateInterval
}
