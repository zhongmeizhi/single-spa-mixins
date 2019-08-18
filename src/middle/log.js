function log( ctx ) {
    console.log(`接收请求: ${ctx.header.host + ctx.url}, 类型: ${ctx.method}`);
}

module.exports = function () {
    return async function ( ctx, next ) {
        log(ctx);
        await next()
    }
}
