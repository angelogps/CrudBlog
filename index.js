const express = require("express");
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")

const app = express();

//view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'));


//bodyparser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão feita com sucesso!")
    }).catch((error) =>{
        console.log(error)
    })


app.use("/", categoriesController);
app.use("/", articlesController)

app.get("/",(req,res) =>{
    res.render("index")
})


app.listen(8080, ()=>{
    console.log("Rodando em localhost:8080/")
})