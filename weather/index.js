const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req,res){

    res.sendFile(__dirname +"/index.html")
})


app.post('/', function(req,res){
   console.log(req.body.cityName)
   const query=req.body.cityName;
   const apiKey="cd4c2ee21cfa168b85baccdfea897947"
   const unit ="metric";
   const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units="+unit+"&appid="+apiKey;




    https.get(url, function(response){
    console.log(response.statusCode);
        
    response.on("data",function(data)
    {
        JSON.parse(data);
        const weatherData= JSON.parse(data);
        const temp=weatherData.main.feels_like;
        const desc=weatherData.weather[0].description;
    
        const icon=weatherData.weather[0].icon;
       const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.send("<p>The weather is currently " +desc+"</p><br> <h1>The temperature in "+ query+" is " + temp + "degrees Celcius.</h1><br><img src="+ imageURL +">")
    })
    
    })
    
    })
/*const query="Karachi"
const https = require("https");
const apiKey="cd4c2ee21cfa168b85baccdfea897947"
const unit ="metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units="+unit+"&appid="+apiKey;
app.get("/",function(req, res){
https.get(url, function(response){
console.log(response.statusCode);
    
response.on("data",function(data)
{
    JSON.parse(data);
    const weatherData= JSON.parse(data);
    const temp=weatherData.main.feels_like;
    const desc=weatherData.weather[0].description;
    //console.log(temp)
    //console.log(desc)
    const icon=weatherData.weather[0].icon;
   const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
    res.send("<p>The weather is currently " +desc+"</p><br> <h1>The temperature in Karachi is "+ temp +" degrees Celcius.</h1><br><img src="+ imageURL +">")
})

})

})*/


app.listen(3000,function(){

    console.log("Server listening is running on 3000.");
})