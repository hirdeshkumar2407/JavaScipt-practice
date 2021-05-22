  
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let CommentSchema = new mongoose.Schema({
content:{
    type: String,
    require: "Content is Required"
},
post:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post",
    required:"Post is Required Field"
}

});


module.exports=mongoose.model("Comment",CommentSchema);