# Tine Tools Readme

> 作者: Tine Aine
> 更新时间: 2022-06-17
> 开源协议: MIT

## 安装

### 通过 `NPM` 安装

```shell
npm i tinetools
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

## 代码结构

### $tools

> `[browser]`代表可以在`浏览器`中使用，`[node]`代表可以在`node`中使用，`[code]`代表可以在`vs code`插件中使用，`[electron]`代表可以在`Electron`中使用
> (*) 代表部分可用，具体差异请参照 `接口差异表`

#### flow [browser(*),node,code,electron] 
#### file [node,code,electron]
#### net [browser(*),node,code,electron]
#### test [browser,node,code,electron]
#### ui [browser(*),node,code,electron]
#### sys [browser(*),node,code,electron]

## 部分代码源

### u-View UI
### [DayJS](https://day.js.org/en/)