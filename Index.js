//Importing the Express 
const express = require("express");
const app = express();

//Importing the connection with database
const connection = require("./database/database")

//Importing the body-parser
const bodyParser = require("body-parser");

//Seting up the view engine
app.set("view engine", "ejs");

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

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, () => {
    console.log("Servidor rodando")
})