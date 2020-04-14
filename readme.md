# Readme 咯

> 这是一个以 Vue为主的 微前端项目，也是一个作者写轮子的地方。

实现一套微前端架构，可以把其分成四部分
* 加载器：也就是微前端架构的核心，主要用来调度子应用，决定何时展示哪个子应用。
* 包装器：有了加载器，可以把现有的应用包装，使得加载器可以使用它们。
* 主应用：一般是包含所有子应用公共部分的项目。
* 子应用：众多展示在主应用内容区的应用。


### 本项目优点

1. 既可以单独运行子项目，也可以聚合运行微前端
2. 既可以单独打包子项目，也可以整体打包

***

项目任在持续迭代中... 喜欢请 Star，请勿将该项目商用。

### 安装

`npm run i:all`

### 子项目独立运行（方便开发）

* `npm run dev:app1` 端口：8005
* `npm run dev:app2` 端口：8006
* `npm run dev:navbar` 端口：8007

### 微前端聚合运行

1. `npm run micro:all`
2. 打开 `http://localhost:5000/`

分别运行端口：
* 主页面 `5000`
* app1 `8085`
* app2 `8086`
* navbar `8087`

### 打包

打包目录在`/dist`

* 全部：`npm run build:all`
* root: `npm run build:root`
* app1: `npm run build:app1`
* app2: `npm run build:app2`
* navbar: `npm run build:navbar`

### 服务端运行打包结果

1. `node server.js`
2. 打开：`http://localhost:2345/#/`


### 审查

`npm run audit:all`

### 内含轮子

* [数据Mock服务](/z-mock/readme.md)。一个炒鸡方便，简单好用，易部署的 API Mock服务
