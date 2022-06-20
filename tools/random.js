import rProvinces from '../data/province.js';
import rCitys from '../data/city.js';
import rAreas from '../data/area.js';


// 随机生成一个数字
// 核心随机算法，以下的绝大多数方法都依赖与此方法提供的随机数
function randomInt(min, max) {
	if (min >= 0 && max > 0 && max >= min) {
		let gab = max - min + 1;
		return Math.floor(Math.random() * gab + min);
	} else {
		return 0;
	}
}

// 随机生成一个英文字符
// Case: Low 小写 | Upper 大写 | -1 随机
function randomChar(Case = -1) {
	let char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
		'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
		'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	]
	if (Case == -1) {
		return char[randomInt(0, 51)]
	} else if (Case === "Upper") {
		return char[randomInt(0, 25)]
	} else {
		return char[randomInt(26, 51)]
	}
}
// 随机生成一个英文单词

// 随机生成一个中文汉字

// 随机生成一个词语

// 随机获取一个姓
// TODO：允许以常见姓为基础增加权重
// abs:是否采用绝对随机的方式，如果为 true，则可能出现不常见的姓(暂未实现)
function getSurname(abs = false) {

	let surnames = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '岁',
		'梁', '宋', '郑', '谢', '韩', '冯', '于', '董', '萧', '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕', '苏', '蒋',
		'蔡', '贾', '丁', '魏', '薛', '圆', '余', '潘', '杜', '戴', '夏', '钟', '注', '田', '任', '姜', '范', '方', '石', '姚',
		'谭', '廖', '邹', '熊', '金', '陆', '郝', '白', '崔', '康', '毛', '邱', '江', '史', '顾', '侯', '孟', '龙', '万', '段',
		'漕', '钱', '汤', '黎', '易', '常', '武', '乔', '贺', '赖', '龚', '文', '庞', '楼', '兰', '殷', '施', '陶', '洪', '翟', '安',
		'颜', '倪', '牛', '温', '芦', '季', '章', '鲁', '葛', '伍', '韦', '毕', '夏', '燃', '焦', '向', '柳', '路', '岳',
		'齐', '沿', '梅', '莫', '庄', '辛', '管', '祝', '左', '涂', '谷', '祁', '时', '舒', '耿', '呼', '路', '詹', '关', '苗', '凌',
		'费', '纪', '靳', '盛', '童', '欧', '甄', '项', '曲', '成', '游', '裴', '席', '查', '屈', '鲍', '位', '覃', '霍',
		'翁', '隋', '植', '甘', '景', '薄', '单', '包', '司', '柏', '宁', '柯', '元', '桂', '闵', '欧阳', '解', '强', '柴', '华', '车',
		'冉', '房', '边', '事', '饶', '入', '厘', '威', '丘', '米', '池', '滕', '晋', '苑', '减', '畅', '宫', '来', '瞪', '苟', '全',
		'褚', '廉', '简', '盖', '符', '奚', '木', '党', '燕', '郎', '邸', '算', '谈', '姬', '屠', '连', '郜', '号', '栾', '郁', '商',
		'蒙', '计', '揭', '窦', '迟', '字', '敖', '糜', '鄢', '冷', '卓', '花', '仇', '蓝', '都', '月', '稽', '练', '仲',
		'乐', '虞', '卡', '封', '竺', '洗', '官', '衣', '楚', '佟', '栗', '匡', '宗', '应', '台', '巫', '鞠', '僧', '桑', '荆', '谌',
		'银', '扬', '明', '沙', '薄', '伏', '岁', '习', '胥', '保', '和', '蔺', '家'
	]
	return surnames[randomInt(0, surnames.length - 1)]
}

// 随机获取一个名字
// gender 性别化（0：男性化；1：女性化）
// num(字数) 如果为-1 则随机一或两个字的名字
// assignedSurname 是否指定姓 -1 随机生成一个姓 |  "XX" 指定一个姓 |  "" 不添加姓
function getName(gender = 0, num = 2, assignedSurname = -1) {
	let mWords = ['刚', '守', '成', '崇', '泊', '清', '青', '庆', '齐', '家', '治', '国', '平', '天', '生', '民', '若', '文', '金', '承',
		'华', '春', '流', '伯', '晓', '仁', '涛', '通', '穆', '凯', '东'
	]
	let fWords = ['燕', '巧', '娇', '艳', '娜', '倩', '清', '青', '佳', '伊', '宜', '怡', '聪', '鑫', '雪', '芳', '萍', '苹', '翠', '晓',
		'桂', '波', '美', '茹', '露', '楠', '春', '欢', '梦', '黛', '晴', '雯', '玉', '宝', '秋', '夏', '冬', '云', '娟', '丽',
		'素', '淑', '君', '静', '海', '璐', '涛'
	]
	let name = ''
	if(num == -1){
		num = randomInt(1,2)
	}
	for (let i = 0; i < num; i++) {
		if (gender == 0) {
			name += mWords[randomInt(0, mWords.length - 1)]
		} else {
			name += fWords[randomInt(0, fWords.length - 1)]
		}
	}
	if (assignedSurname == -1) {
		name = getSurname() + name
	} else if (assignedSurname != "") {
		name = assignedSurname + name
	}
	return name
}

// 随机获取一个地址
// province 指定省份
// city 指定市
function getAddress(provinceAddr = undefined, cityAddr = undefined) {

	var provinces = rProvinces
	var citys = rCitys
	var areas = rAreas
	var province = -1
	var city = -1
	var area = -1

	if (provinceAddr)
		for (let i = 0; i < provinces.length; i++) {
			if (provinces[i].label === provinceAddr)
				province = i
		}

	// 随机一个省或直辖市
	if (province == -1)
		province = randomInt(0, provinces.length - 1)
	// 整理该地区的下辖城市
	citys = citys[province];

	if (cityAddr)
		for (let i = 0; i < citys.length; i++) {
			if (citys[i].label === cityAddr)
				city = i
		}

	// 随机指定一个市
	if (city == -1)
		city = randomInt(0, citys.length - 1)
	areas = areas[province][city];
	// 随机指定一个区
	area = randomInt(0, areas.length - 1)
	// 拼接字符串并返回
	return provinces[province].label + citys[city].label + areas[area].label;

}

// 随机获取一个手机号
// type: 0中国移动 1中国电信 2中国联通 -1 随机
function getPhoneNumber(type = -1) {
	var mobile = ["139", "138", "137", "136", "135", "134", "147", "150", "151", "152", "157", "158", "159", "178",
		"182", "183", "184", "187", "188", "198", "195"
	]
	var telecom = ["133", "149", "153", "173", "177", "180", "181", "189", "199", "191"]
	var unicom = ["130", "131", "132", "155", "156", "185", "186", "145", "175", "176", "166", "140"]
	var tel = [mobile, telecom, unicom]
	var phone = "";
	if (type != -1) {
		phone = tel[type][randomInt(0, tel[type].length - 1)]
	} else {
		let key = randomInt(0, 2)
		phone = tel[key][randomInt(0, tel[key].length - 1)]
	}
	for (let i = 0; i < 8; i++) {
		phone += randomInt(0, 9)
	}
	// console.log( "-------------===========",phone);
	return phone
}
// 随机生成一个身份证号
// province 指定省份
// city 指定市
// gender 指定性别 (1男 2女)
// dateOfBirth 指定出生日期
function getIDNumber(province = undefined, city = undefined, dateOfBirth = undefined, gender = undefined) {
	// 3702 85 19980909 3532
	var id = ""
	// 省份

	// 地级市

	// 出生日期

	// 后缀码

	return id
}

// 随机生成一个车牌号

// 随机生成一个社保卡账号

// 随机生成一个银行卡账号

// 随机生成密码
// num: 生成密码的位数，默认六位
// type: n 仅数字 | c 仅字符 | s 仅符号 | cn 字符数字 | cs 字母+符号 | ns 数字+符号 | a 字符+数字+符号
function randomPassword(num = 6, type = "a") {

}

// 随机生成一个邮箱

// 随机生成多个爱好

// 随机生成一段经历

// 随机生成一个头像（依赖网络环境）

// 随机生成一个网名

// 随机生成一个职业

// 随机生成一个手机型号

// 随机生成一个浏览器版本

// 随机生成一个车辆类型

// 随机生成职业经历

// 随机生成学校信息

// 随机生成一张图片（任意像素排布）

// 随机生成个人详细信息

export default {
	randomInt,
	getSurname,
	getName,
	getAddress,
	getPhoneNumber,
	randomChar
}
