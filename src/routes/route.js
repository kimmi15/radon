const express = require('express');
const router = express.Router();

const authorController= require("../controllers/auotherController")
const publisherController = require('../controllers/Publisher')
const bookController= require("../controllers/bookController")
const model=require("../models/authorModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createauthor',async function (req,res){
    let data=req.body
    let savedData=await  model.create(data)
    res.send({msg:savedData})
})

router.post('/createPublisher', publisherController.createPublisher)
router.post('/createBook', bookController.createBook)

router.get('/getAllBooks', bookController.getAllBooks)
router.put("/updateBooks", bookController.updateBooks)

module.exports = router;