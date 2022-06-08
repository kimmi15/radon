const mongoose=require("mongoose");

const booscheme_3=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author_id:{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        required:true,
    },
    ratings:{
        type:Number,
        required:true,
    },
});
module.exports=mongoose.model("bookDay_3",booscheme_3);