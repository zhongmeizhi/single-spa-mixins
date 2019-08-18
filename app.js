const Koa = require('koa');
// const querystring = require('querystring'); // 解析?a=1&b=2的插件
// Koa的ctx有解析get请求参数，但没有解析post请求参数
const koaBody = require('koa-body');
const loggerAsync = require('./src/middle/log.js');
const getMockBundleOfDir = require('./src/utils/getMock.js');

//--------string_decoder，解决乱码问题，是一个node模块
// let {StringDecoder} = require('string_decoder');

const toString = Object.prototype.toString;
const mockDirPath = './src/mock'; // mock目录地址

// 获取mock对象集合
let mockBundle = getMockBundleOfDir(mockDirPath);

const app = new Koa();
app.use(loggerAsync()) // 自己的log插件
app.use(koaBody()); // koa插件，用来解析post请求的body

// mock请求
app.use(async (ctx, next) => {
    // 对应mock的请求类型 + 空格 + 请求地址的映射
    const request = `${ctx.method} ${ctx.path}`;
    // TODO 容错
    try {
        const mock = mockBundle[request];
        const mockType = toString.call(mock);
        if (mockType === '[object Function]') { // mock数据为函数
            let query;
            if (ctx.method === 'GET') {
                query = ctx.query;
            } else if (ctx.method === 'POST') {
                query = ctx.request.body;
            }
            // 返回mock结果
            const response = mock(query);
            return ctx.body = response;
        } else if (mock) { // 有值
            return ctx.body = mock;
        }
    } catch (error) {
        ctx.status = 500;
        return ctx.body = {
            error,
            msg: 'mock函数执行出错'
        }
    }
    // 找不到mock函数，那么next
    next();
})


// 底线
app.use(async ctx => {
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
            <h2>请确认URL是否正确、请求类型是否大写</h2>
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
    console.log('\033[44;37m > 开始运行 ', '端口3333', '\033[0m');
});
