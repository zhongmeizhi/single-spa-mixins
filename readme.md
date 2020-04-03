# Readme 咯

> 这是一个以 Vue为主的 微前端项目，也是一个作者写轮子的地方。

喜欢请 Star，请勿将该项目商用。

### 安装

1. `npm i`
2. `npm run install:all`

### 运行

`npm run dev:all`

分别运行端口：
* 主页面 `5000`
* app1 `8085`
* app2 `8086`
* navbar `8087`

### 打包

打包目录在`/dist`

* 全部：`npm run build:all`（不推荐）
* app1: `build:app1`
* app2: `build:app2`
* navbar: `build:navbar`

### 线上运行

线上的环境一个设置线上的导入项目路径

如果想尝试查看结果可以在打包后运行
1. `npm run install:all`
2. `node server.js`

### 审查

`npm run audit:all`

### 内含轮子

* [数据Mock服务](/z-mock/readme.md)。一个炒鸡方便，简单好用，易部署的 API Mock服务
