//Importing Sequelize
const Sequelize = require("sequelize");
//Importing connection database
const connection = require("../database/database");
//Importing Model Category
const Category = require("../categories/Category");

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

//Relationship betwenn Category and Article
Category.hasMany(Article) //hasMany = Tem muitos (Relacionamento 1 para muitos)
//Relationship between Article and Category
Article.belongsTo(Category); //belongsTo = Pertence à (Relacionamento 1 para 1)

//Export Model Article
module.exports = Article;