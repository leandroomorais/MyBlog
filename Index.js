//Importing the Express 
const express = require("express");
const app = express();

//Importing the body-parser
const bodyParser = require("body-parser");

//Seting up the view engine
app.set("view engine", "ejs");

//Seting up the body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Seting up the static files
app.use(express.static("public"));

app.listen(8080, () => {
    console.log("Servidor rodando")
})