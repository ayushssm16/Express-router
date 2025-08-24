const express = require("express");
const router = express.Router();

//INdex - posts
router.get("/", (req,res) => {
    res.send("Get for post");
});

//Show - posts
router.get("/:id", (req,res) => {
    res.send("Get for post id");
})

//POST - posts
router.post("/", (req,res) => {
    res.send("Post for post");
})

//Delete - posts
router.delete("/:id", (req,res) => {
    res.send("Delete for post id");
})

module.exports = router;