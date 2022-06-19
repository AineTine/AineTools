# Aine Tools Readme

> 作者: Tine Aine

> 更新时间: 2022-06-19

## 安装

### 通过 `NPM` 安装

```shell
npm i ainetools
```

### 在 `Vue` 中安装（注册）

```javascript
Vue.use(ainetools)
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

#### datetime [browser(*),node,code,electron] 
时间日期工具包
#### flow [browser(*),node,code,electron] 
流处理工具包
#### file [node,code,electron]
文件工具包
#### net [browser(*),node,code,electron]
网络工具包
#### test [browser,node,code,electron]
检查与测试工具包
#### ui [browser(*),node,code,electron]
界面化工具包
#### sys [browser(*),node,code,electron]
系统工具包
#### random [browser,node,code,electron]
随机生成工具，可以随机生成数字/姓名

## 修订历史

- 2022-06-19 version 1.0.0 初始版本（首次发布）
- 2022-06-19 version 1.0.1 增加了部分功能
- 2022-06-19 version 1.1.0 将名称改为AineTools（bing的翻译太坏了）

## 计划

- version 1.1.1 完善random和net包

## 部分代码源

### u-View UI
### [DayJS](https://day.js.org/en/)