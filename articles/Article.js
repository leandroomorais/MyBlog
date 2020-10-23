//Importing Sequelize
const Sequelize = require("sequelize");
//Importing connection database
const connection = require("../database/database");

//Define Model Article
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

//Export Model Article
module.exports = Article;