const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")

const Article = connection.define("articles",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body :{
        type: Sequelize.TEXT,
        allowNull: false
    }
})


Category.hasMany(Article); // Uma categoria tem muitos artigos 1-p-m
Article.belongsTo(Category); // um artigo pertence a uma categoria 1-p-1



module.exports = Article;