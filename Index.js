//Importing the Express 
const express = require("express");
const app = express();

//Seting up the view engine
app.set("view engine", "ejs");

app.listen(8080, () => {
    console.log("Servidor rodando")
})