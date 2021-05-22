const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))



//static files

app.use(express.static('public'));
app.get('/',function(req, res){

 res.sendFile(__dirname + '/signup.html')

});

app.post('/',function(req, res){

    console.log(req.body.firstName);
    console.log(req.body.lastName)
    console.log(req.body.email)
})


app.listen(3000,function(){

    console.log("Server is working at port 3000");
})