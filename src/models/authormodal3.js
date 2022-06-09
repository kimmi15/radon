const mongoose=require("mongoose");
const authorscheme_3=new mongoose.Schema({
    author_name:{
    type:String,
    required:true,
    },
    authoer_id:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.models.author || mongoose.model("author",authorscheme_3);