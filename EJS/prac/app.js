const express = require('express')
const bodyParser = require('body-parser')
const app = express();
var date = new Date();


const check=date.getMonth();
items=['j','k']
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/', function (req,res){

    res.render('list',{check:check, nextItems:items})
})

app.post('/',function(req,res){

    items.push(req.body.enterItem)
    res.redirect('/')
})


app.listen(3000,function(req,res){

    console.log("Server listening 3000")
})