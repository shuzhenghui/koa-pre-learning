const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')

const catchError = require('./middlewares/exception')


const app = new Koa()

// 全局异常监听
app.use(catchError)

app.use(parser())

// 初始化,将路由api挂载到koa上
InitManager.initCore(app) 


app.listen(8848, () => {
    console.log('服务器已开启!')
})