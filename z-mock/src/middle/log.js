function log( ctx ) {
    console.log('\033[42;30m 接收请求:',
        ` ${ctx.header.host + ctx.url}, 类型: ${ctx.method}`,
        '\033[0m');
}

module.exports = function () {
    return async function ( ctx, next ) {
        log(ctx);
        await next()
    }
}
