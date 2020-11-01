//Importing sequelize
const Sequelize = require('sequelize');

//Seting up connection with database
const connection = new Sequelize('myblog','root','',{
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00",
})

module.exports = connection;
