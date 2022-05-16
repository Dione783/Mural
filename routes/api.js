const express = require("express");
const router = express.Router();
const posts = require("../model/posts");
const cors = require("cors");
const options = {
    origin:"http://localhost:3000"
}

router.use(cors(options));


router.get("/all",(req,res)=>{
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new",express.json(),(req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title,description);
    res.send("Post Adicionado");
});

router.put("/edit",express.json(),(req,res)=>{
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    posts.editPost(id,title,description);
    res.send(id);
})

module.exports = router;