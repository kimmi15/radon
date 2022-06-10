const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/kimmi-db3?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

// app.use('/', route);

const midGLb=function(req,res,next)
{
    console.log("Hi I am a GLOBAL middleware");
    next()
}

const assignmentMW=function (req,res,next){
    var cuurentdate=new Date();
    var datatime=cuurentdate.getDate()+" "
    + (cuurentdate.getMonth()+1)  + "" 
    + cuurentdate.getFullYear() + " "  
    + cuurentdate.getHours() + ":"  
    + cuurentdate.getMinutes() + ":" 
    + cuurentdate.getSeconds();
       
    
    let ip=req.ip  //ip addresss
    let url=req.originalUrl
    console.log(`${datatime} ${ip} ${url}`)
    next();

}
//
app.use(assignmentMW)//global middlware

///reaming copde route.js to hit the end-point(api)
app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
