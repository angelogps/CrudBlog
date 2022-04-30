const express = require("express");
const Category = require("./Category")
const slugify = require("slugify")
const router = express.Router()

router.get("/admin/categories/new", (req, res)=>{
    res.render("./admin/categories/new")
})

router.post("/categories/save", (req,res)=>{
    let title = req.body.title;
    if(title != undefined){
        Category.create({
            title:title,
            slug: slugify(title)
        }).then(() =>{
            res.redirect("/")
        })

    }else{
        res.redirect("/admin/categories/new")
    }
});

router.get("/admin/categoires", (req,res) =>{

    Category.findAll().then(categories =>{
        res.render("./admin/categories/index", {categories: categories})
    })
})

router.post("/categories/delete", (req,res) =>{
    let id = req.body.id
    if(id != undefined){

        if(!isNaN(id)){ // for um numero
            
            Category.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                res.redirect("/admin/categoires")
            })
        }else{// não for um numero
            res.redirect("/admin/categoires")
        }

    }else{//null
        res.redirect("/admin/categories")
    }
})

module.exports = router;