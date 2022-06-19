import net from './tools/net';
import flow from './tools/flow';
import file from './tools/file';
import sys from './tools/sys';
import ui from './tools/ui';
import test from './tools/test';
import datetime from './tools/datetime';
import common from './tools/common'
import color from './tools/color'
import random from './tools/random'

const $tools = {
	net,
	datetime,
	flow,
	file,
	sys,
	ui,
	test,
	common,
	color,
	random
}

// 需要通过Vue.use方法安装
const install = Vue => {
	Vue.prototype.$tools = $tools
}

export default {
	install
}