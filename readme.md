# 炒鸡简单的 API Mock服务

### 使用

1. Node.js运行环境
2. cd到文件目录
3. 运行`npm i`
4. 在`src/mock`下添加JS类型的mock文件
5. 运行`node app.js`

### 示例

在`src/mock`文件夹下有2个示例文件

代码参考:

```
    // example
    // 请求类型 + 空格 + 路径
    // 请求类型需要全大写，请求路径以/开头

    const mock = {
        'GET /a/xx': (query) => { // 以函数的形式返回对象
            // console.log(query);
            return {
                age: '16'
            }
        },
        'GET /a/yy': { // 直接返回对象
            isObect: true
        },
        'GET /a/zz': 'test', // 返回字符串
        'POST /y/bb': (body) => {
            // 根据不同的请求类型来实现不同数据;
            // console.log(body);
            if (body.xyz == 0) {
                return {
                    sex: 'man'
                }
            } else {
                return {
                    sex: 'woman'
                }
            }                
        }
    }

    module.exports = mock;
```

### 说明：

1. 无论GET请求还是POST请求query参数都会转换成对象。
2. 请求类型需要全大写
3. mock映射值可以为函数或直接返回response

### mock环境优化

达到的效果：

在开发环境中就可以在url后面添加`?ismock=1`参数来实现数据mock，(没有该参数就访问正常数据)，且不会对测试环境和生产环境造成任何影响

实现步骤：

1. 通过Webpack设置代理。

    ```
        //webpack.config.js

        proxy: {
            '/mock': {
                target: 'mock',
                changeOrigin:true,
                pathRewrite: {
                    '^/mock': ''
                }
            }
        }
    ```

2. 拦截请求(比如Axios自带的拦截器)
   * 判断url参数(如`?ismock=1`)
   * 判断当前环境(如`process.env.NODE_ENV == 'development'`)
   * 添加`baseUrl = /mock`

3. 在webpack的压缩处理中删除不可达代码（见webpack配置表）



### 附

喜欢请 Star，使用和优化可以Fork代码。

### TODO

PM2

> pm2 start app.js --watch 开启热重载

1. npm install -g pm2
2. pm2 start app.js
3. pm2 stop app.js
4. pm2 stop all


开启多进程