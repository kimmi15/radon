const express = require('express');
// const externalModule = require('./logger')

const lodash = require('lodash')
const logger = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    logger.welcome()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    validator.trim()
    validator.changetoLowerCase()
    validator.changeToUpperCase()
    res.send('My third api!')
});

router.get('/hello', function (req, res) {
    let arr=["janbuary","febuary","March", "April", 'May', 'June', 'July', "Audgust", 'September', "October", "November","December"]
    //  lodash.chunk(arr,3)//chunk is function //load dash package 
     console.log(lodash.chunk(arr,3))
     let odd=[3,5,7,9,23,45,29,41,21,25]
     //tail function is returing all element by removing first elements
    //  lodash.tail(odd)
    console.log( lodash.tail(odd))
    var new_arr=([2,3,4,5,6],[2,3,4,5,2],[903,12,3,56,67],[4546,7884,3,356,67],[89,34,57,78,22])
    // lodash.union(new_arr)
    console.log(lodash.union(new_arr))
    const new_arr2=[
        ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
        ]
    //lodash.fromPairs(new_arr2)
    console.log(lodash.fromPairs(new_arr2));
         res.send('My 4th api!')

});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason