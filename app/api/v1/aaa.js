const Router = require('koa-router')
const router = new Router()

// 校验规则
// const validator = require('validator');

// const { HttpException } = require('../../../core/http-exception')


router.get('/v1/user/index', (ctx, next) => {

    // validator(ctx)
    ctx.body = {
        aaa: html,
        bbb: 'json'
    }
    // if(true) {
    //     const error = new global.errs.HttpException()
    //     console.log(error)
    //     throw error
    // }
})

module.exports = router