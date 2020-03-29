class HttpException extends Error {
    constructor(errorCode = 10000, status = 400, msg = '服务器异常') {
        super()
        this.errorCode = errorCode
        this.status = status
        this.msg = msg
    }
}

class paramsException extends HttpException {
    constructor(errorCode = 10000, msg = '参数错误') {
        super()
        this.errorCode = errorCode
        this.status = 400
        this.msg = msg
    }
}

module.exports = {
    HttpException,
    paramsException
}