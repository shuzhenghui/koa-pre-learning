const { db } = require('../../core/db')

const {Sequelize, Model} = require('sequelize')

class User extends Model {

}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true// 自动添加可增长id，保证每个用户id不相同，高并发注册时有缺陷（不推荐这种）
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, {sequelize: db})

module.exports = {
    User
}