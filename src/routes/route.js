const express = require('express');
const { authorscheme_3 } = require('../controllers/authorcontroller3');
const router = express.Router();

const {createBook , findBookByCost ,findByNamesendBook ,findAuthor} = require('../controllers/bookcontroller3')
//sir code ..........................
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })
//sir code end .............................

router.post('/createbook',createBook);
router.post ('/createAuthor',authorscheme_3)
router.get('/findByNamesendBook',findByNamesendBook);
router.get('/findAuthor',findAuthor);
router.get('/findBookByCost',findBookByCost)


module.exports = router;