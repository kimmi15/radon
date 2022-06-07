const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type:String,
        require:true
    },
    price:{
        indianPrice:String,
        european:String,
    },
    year:{
        type:String,
        default:"2021"
    },
    tags :[String],
    authoerName:String,
    totalPages:Number,
    stockAvailble:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
