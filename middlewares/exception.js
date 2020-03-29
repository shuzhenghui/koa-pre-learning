const catchError = async (ctx, next) => {
    try {
        await next()
    } catch {
        ctx.body = '服务器错误'
    }
}

module.exports = catchError