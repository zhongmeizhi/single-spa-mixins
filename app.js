const Koa = require('koa');
const querystring = require('querystring');
const koaBody = require('koa-body');
const loggerAsync = require('./src/middle/log.js');
const getMockBundleOfDir = require('./src/utils/getMock.js');

//--------string_decoder，解决乱码问题，是一个node模块
// let {StringDecoder} = require('string_decoder');

const mockDirPath = './src/mock'; // mock目录地址
let mockBundle = getMockBundleOfDir(mockDirPath);

const app = new Koa();

app.use(loggerAsync()) // 自己的log插件
app.use(koaBody()); // koa插件，用来解析post请求的body

// 遍历mock数据
for (let mock in mockBundle) {
    // 解析请求类型和请求地址
    let [type, fnName] = mock.split(' ');
    // mock请求
    app.use(async (ctx, next) => {
        const isPathFit = ctx.path === fnName;
        const isTypeFit = ctx.method === type.toUpperCase();
        if (isPathFit && isTypeFit) {
            // TODO 容错
            try {
                let query;
                if (ctx.method === 'GET') {
                    // 反序列化 get请求的参数
                    query = querystring.parse(ctx.querystring);
                } else if (ctx.method === 'POST') {
                    query = ctx.request.body;
                }
                // 返回mock结果
                const response = mockBundle[mock](query);
                return ctx.body = response;
            } catch (error) {
                ctx.status = 500;
                return ctx.body = {
                    error,
                    msg: 'mock函数执行出错'
                }
            }
        } else {
            // 去下一个use咯
            next();
        }
    })
}


// 底线
app.use(async ctx => {
    console.log(ctx.path, 'ctx.path')
    if (ctx.path === '/') {
        let html = `
            <h2>koa2 POST请求测试页面</h2>
            <form method="post" action="/c">
                <p>userName</p> 
                <input name="userName">  <br>
                <p>age</p>
                <input name="age">
                <p>website</p>    
                <input name="website">    
                <button type="submit">提交</button> 
            </form>
        `;
        ctx.body = html;
    } else {
        let html = `
            <h1>404</h1>
            <h2>请确认URL是否正确</h2>
        `;
        ctx.status = 404;
        ctx.body = html
    }
})

app.on('error', err => {
    console.error('系统错误', err)
});

app.listen(3333, () => {
    // console.log(process.argv, 'argv')
    console.log('> 开始运行 ', '端口3333')
});
