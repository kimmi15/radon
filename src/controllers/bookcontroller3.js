const authormodal3 = require("../models/authormodal3"); // Author Schema

const bookmoda13=require('../models/bookmodal3'); // books schema


//create Book
const createBook=async(req,res)=>{
    if(!req.body.author_id){
        res.send({msg:"please enter author id"})
    }
    else{
     const data=await bookmoda13.create(req.body);
        res.send({msg:data})
    }
}
// findByNamesendBook 
const findByNamesendBook=async(req,res)=>{
    const author=await authormodal3.findOne({author_name:"chetan Bhagat"});
    const id=author.author_id;
    const books=await bookmoda13.find({author_id:id})
    res.send({msg:books})
}
// //find author
const findAuthor=async(req,res)=>{
    const book=await bookDay_3.findOneAndUpdate({name:"Two states"},{price:100},{new:true}); //update books 
    const author=await authormodal3.find({author_id:book.author_id}).select({author_name:1,_id:0});
    res.send({updateBook:book,authorName:author})
}

//findBookCost
const findBookByCost = async (req,res) => {
    const bookAuthor_Name = await bookmoda13.find({price : { $gte: 50, $lte: 100}}); // [{} ,{}
    const autherName = await authormodal3.find({author_id:bookAuthor_Name[0].author_id})
    res.send({bookName: bookAuthor_Name,auhtorName: autherName})
}


const byAutherId = async (req, res) => {
    const Author_Id = req.params.Author_Id;
    const bookName = await bookmoda13
      .find({ author_id: Author_Id })
      .select({ name: 1, _id: 0 });
    res.send(bookName);
  };
  
  const ageAuthor = async (req, res) => {
    const isOlder50yAuthor = await authormodal3.find({age:{$gte : 50} }); 
    const book =await bookmoda13.find(); 
    const authorName = []
      isOlder50yAuthor.forEach(ele =>{
        book.forEach(item =>{
          if( item.author_id === ele.author_id && item.ratings > 4 ){
            authorName.push({author_age: ele.age ,author_name: ele.author_name})
          }
        })
      })
    res.send(authorName)
  };
  





module.exports ={ createBook , findByNamesendBook,  findAuthor, findBookByCost ,byAutherId,
    ageAuthor,}