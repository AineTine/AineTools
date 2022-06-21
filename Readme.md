# Aine Tools Readme

> 作者: Tine Aine
> 更新时间: 2022-06-21
> 开源协议: MIT



## 安装

### 通过 `NPM` 安装

```shell
npm i ainetools
```

### 在 `Vue` 中安装（注册）

```javascript
Vue.use(tine)
```

## 使用

```vue
// 可以在任何可访问vm的位置，通过 `$tools` 调用，例如:
console.log("是否为一个数字 -------->",this.$tools.test.isNumber("123"));
console.log("是否为一个数字 -------->",this.$tools.test.isNumber("xyz"));
```

## 项目结构

- [data] 				数据文件
	- area.js			全国县级市/区数据（如黄岛区）
	- city.js			全国地级城市（如青岛市）
	- province.js		全国省/直辖市（如山东省）
- [tools] 				工具代码
	- 
- index.js				入口类

## 部分代码源

### u-View UI
### [DayJS](https://day.js.org/en/)