const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    var movies=["The Shawshank Redemption ",
    "The Godfather",
    " The Dark Knight",
    " The Godfather: Part II",
    " 12 Angry Men ",
    " Schindler's List ",
    "The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
 ]
   
    res.send(movies)

});


router.get('/movies/:indexNumber', function (req, res) {
    var movies=["The Shawshank Redemption ",
    "The Godfather",
    " The Dark Knight",
    " The Godfather: Part II",
    " 12 Angry Men ",
    " Schindler's List ",
    "The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
 ]
    // res.send(movies[req.params.indexNumber])
    if(req.params.indexNumber < 0 || req.params.indexNumber > movies.length){
     res.send("invalid option");
    }
    else{
        res.send(movies[req.params.indexNumber])
    }
});


router.get('/films', function (req, res) {
    var store=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name:": "Finding Nemo"
       }
    ]   
    res.send(store)
});
router.get('/films/:filmId', function (req, res) {
    var store=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "ncendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name:": "Finding Nemo"
       }
    ]   

    if(req.params.filmId < 0 || req.params.filmId > store.length){
        res.send("chala ja ya se ")
    }else{
       const singleData =  store.find(ele => ele.id ===  +req.params.filmId )
    //    console.log(singleData)
    res.send(singleData)
    }
   
});
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason