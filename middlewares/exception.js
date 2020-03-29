const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const isDev = global.config.environment
        const isHttpException = error instanceof HttpException
        if (isDev && isHttpException)  throw error

        if (isHttpException) {
            // 定义的已知错误返回信息
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method}-${ctx.path}`
            }
            ctx.status = error.status
        } else {
            ctx.body = {
                msg: '未知错误',
                error_code: 99999,
                request: `${ctx.method}-${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError