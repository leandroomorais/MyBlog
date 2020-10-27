const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("Rota de categoria")
});

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new.ejs");
});

module.exports = router;