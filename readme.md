# 炒鸡简单的 API Mock服务

### 使用

1. Node.js运行环境
2. cd到文件目录
3. 运行`npm i`
4. 在`src/mock`下添加JS文件来mock数据
    ```
        // example
        // 请求类型 + 空格 + 路径

        const mock = {
            'get /a/xx': (query) => {
                // console.log(query)
                return {
                    age: '16'
                }
            },
            'POST /y/bb': (body) => {
                console.log(body)
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
5. 运行`node app.js`

### 原理

1. 遍历mock文件夹，导入该文件夹下的 .js 文件
2. 解析 .js 文件
3. 封装请求

### 附：

1. 无论GET请求还是POST请求query参数都会转换成对象。
2. 请求类型大小写随意

### PM2
// npm install -g pm2
// pm2 start app.js
// pm2 stop app.js
// pm2 stop all

