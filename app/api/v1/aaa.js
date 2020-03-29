const Router = require('koa-router')
const router = new Router()

router.get('/index', (ctx, next) => {
    ctx.body = '121324'
})

module.exports = router