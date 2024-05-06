const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Connectado ao servidor MySQL!')
}catch(error){
    console.error(`Error MySQL: ${error} `)
}

module.exports = Sequelize