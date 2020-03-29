const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method}-${ctx.path}`
            }
            ctx.status = error.status
        } else {
            ctx.body = {
                msg: '未知错误',
                error_code: 10000,
                request: `${ctx.method}-${ctx.path}`
            }
        }
    }
}

module.exports = catchError