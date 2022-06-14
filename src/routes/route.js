const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const  auths=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end




/////-----------------

router.get("/users/:userId", auths.auth ,userController.getUserData)
//route middleware ----auths.auth //if user have not authnications token(x-auoth-token)
router.put("/users/:userId",auths.auth , userController.updateUser)
//route middleware-----auths.auth //if user have not authnications token(x-auoth-token)
router.delete("/users/:userId",auths.auth , userController.deletesUser)
//route middleware-----auths.auth //if user have not authnications token(x-auoth-token)
/////-----------------
module.exports = router;