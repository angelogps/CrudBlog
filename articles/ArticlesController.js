const express = require("express");
const router = express.Router()

router.get("/articles", (req,res)=>{
    res.send("ROTA DE artigo")
});

router.get("/admin/articles/new", (req, res)=>{
    res.send("ROTA PARA CRIAR NOVAS artigo")
})

module.exports = router;