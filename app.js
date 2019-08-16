const Koa = require('koa');
const fs = require('fs');
const querystring = require('querystring');
const koaBody = require('koa-body');
// const path = require('path');

//--------string_decoder，解决乱码问题，是一个node模块
// let {StringDecoder} = require('string_decoder');


//path.resolve('./src/mock'); // mock目录地址
const mockDirPath = './src/mock'; // mock目录地址
const getAllFileOfDir = (mockDirPath) => {
    // 同步读取mock文件夹 
    const fileNameList = fs.readdirSync(mockDirPath);
    // mock对象汇总
    let mockBundle = {};
    // 遍历文件
    fileNameList.forEach(fileName => {
        // // 读取文件
        // fs.readFile(`${mockDirPath}/${fileName}`, (err, data) => {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     // 获取JSON数据
        //     let result;
        //     try {
        //         // 将Buffer转字符串，再解析
        //         result = JSON.parse(data.toString());
        //     } catch (error) {
        //         console.log('解析错误：', error)
        //         result = {}
        //     }
        //     // 将解析的结果推送到数组中
        //     console.log(result, 'result');
        // })
        const file = require(`${mockDirPath}/${fileName}`);
        Object.assign(mockBundle, file);
    })
    return mockBundle;
}

let mockBundle = getAllFileOfDir(mockDirPath);


const app = new Koa();

// koa插件，用来解析post请求的body
app.use(koaBody());

// mock请求
app.use(async (ctx, next) => {
    // 遍历mock数据
    for (let mock in mockBundle) {
        // 解析请求类型和请求地址
        let [type, fnName] = mock.split(' ');
        const isPathFit = ctx.path === fnName;
        const isTypeFit = ctx.method === type.toUpperCase();
        if (isPathFit && isTypeFit) {
            let query;
            if (ctx.method === 'GET') {
                // 反序列化 get请求的参数
                query = querystring.parse(ctx.querystring);
            } else if (ctx.method === 'POST') {
                query = ctx.request.body;
            }
            // 返回mock结果
            ctx.body = mockBundle[mock](query);
        }
    }
    // 去下一个use咯
    next();
})



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
    }
})

app.on('error', err => {
    console.error('系统错误', err)
});

app.listen(3333, () => {
    // console.log(process.argv, 'argv')
    console.log('> 开始运行 ', '端口3333')
});
