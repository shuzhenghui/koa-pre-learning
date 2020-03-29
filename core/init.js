/**
 * 初始化项目路由模块()
 */

const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.initLoadException()
        InitManager.loadConfig()
    }
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app/api`

        // 自动导入设定的文件夹下路由模块
        requireDirectory(module, apiDirectory, {
            visit: aaa
        })

        function aaa(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
    static loadConfig(path = '') {
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }
    static initLoadException() {
        const { HttpException } = require('./http-exception')
        global.errs = HttpException
    }
}

module.exports = InitManager