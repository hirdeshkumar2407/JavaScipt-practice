const express=require('express');
const bodyParser=require('body-parser');
const post=require('./routes/post_routes');
const mongoose=require('mongoose');

const app=express();

//---------------------MONGOOSE CONNECTION-------------------
mongoose.connect("mongodb://localhost/socilMediaDb",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database');
})
.catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });
//---------------------MONGOOSE CONNECTION-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//--Body Parser 

/*NOTE:body-parser extract the entire body portion
 of an incoming request stream and exposes it on req.body.*/

/*localhost:3000/create?name=mustafa&id=111
*/
/*mustafa value gets stored in
a through this got >>a = req.param.name<<
*/

//striking bodyParser means depracted, but keep till it subsitute is discovered
/* body parser*/

app.use("/posts", post);
app.listen(3000,()=>{console.log('Server is up and running on port 3000.')});
