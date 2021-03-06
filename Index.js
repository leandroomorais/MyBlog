//Importing the Express 
const express = require("express");
const app = express();

//Importing the connection with database
const connection = require("./database/database")

//Importing the body-parser
const bodyParser = require("body-parser");

//Importing Express Session
const session = require("express-session");

//Importing Models
const Article = require("./articles/Article");
const Category = require("./categories/Category");

//Importing CategoriesController routes
const categoriesController = require("./categories/CategoriesController");

//Importing ArticlesController routes
const articlesController = require("./articles/ArticlesController");
const router = require("./categories/CategoriesController");

//Importing UserController routes
const usersController = require("./user/UserController");

//Seting up the view engine
app.set("view engine", "ejs");

//Setting up the Express Session in app
app.use(session({
    secret: "qualquercoisa",
    cookie: {
        maxAge: 30000,

    }
}));

//Seting up the body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Seting up the static files
app.use(express.static("public"));

//Database
connection.authenticate().then(() => {
    console.log("Conexão realizada com sucesso.");
}).catch((erro) => {
    console.log(erro);
});

//Seting up the categories controller routes in app
app.use("/", categoriesController);

//Seting up the articles controller routes in app
app.use("/", articlesController);

//Seting up the users controller routes in app
app.use("/", usersController);

app.get("/", (req, res) => {
    Article.findAll({
        order: [
            ["id", "DESC"]
        ],
        limit: 4,
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", { articles: articles, categories: categories });
        });

    })

});

app.get("/:slug", (req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug,
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("article", { article: article, categories: categories });
            })
        } else {
            res.redirect("/");
        }

    }).catch(erro => {
        res.redirect("/");
    })
});

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug,
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", { articles: category.articles, categories: categories });
            })

        } else {
            res.redirect("/");
        }
    }).catch(erro => {
        res.redirect("/")
    })
})


app.listen(8080, () => {
    console.log("Servidor rodando")
})