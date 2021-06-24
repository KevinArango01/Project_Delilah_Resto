require('dotenv').config()
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(`mariadb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.HOST}:${process.env.DB_PORT}/delilah_resto_schema`)

sequelize.authenticate().then(() =>{
    console.log("Conectado a la base de datos");
})
.catch( (error)=>{
    console.log("ERROR: " +error);
})

module.exports = {sequelize}