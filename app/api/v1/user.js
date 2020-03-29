const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/user'// 可以给注册在这个文件里的router自动添加路径前缀
})

router.post('/register', async(ctx) => {
    
})