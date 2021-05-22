console.log("Ajax Practice");
let fetchBt  = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)


function buttonClickHandler()
{   
    console.log("You clicked the fetchBtn")
    
    // instantite an xhr objrct
    const xhr =new XMLHttpRequest();

//1>) Opne the object
//xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
// GET first place
// place where we want to get data
// true means asynchronus
// false means synchronus 


//2) POST REQUEST
xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
xhr.getResponseHeader('Content-type','application/json')
// WHat tp o do on progrees (optional)

/*
xhr.onprogress=function()
{
    console.loglog('On progress')
}

/*
xhr.onready=function(){
console.log('ready state',xhr.readyState)
}

/*

*/

//What to do when response is ready 
xhr.onload=function()
{
    // orginal code
//console.log(this.responseText)
// code adding exception handling if file not found
if(this.status === 200)
{
    console.log(this.responseText);

}
else{
console.log("Some error ocuured ");

}
}

//1) send the request
//1) xhr.send();

// 20 send request
params= `{"name":"test","salary":"123","age":"23"}`;
xhr.send(params);
console.log("We are done");
}

let PopBtn = document.getElementById('fetchBtn');
PopBtn.addEventListener('click',popHandler)

function popHandler()
{
    console.log("You clicked the fetchBtn")
    
    // instantite an xhr objrct
    const xhr =new XMLHttpRequest();
xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)
// GET first place
// place where we want to get data
// true means asynchronus
// false means synchronus 

xhr.onload=function()
{
    // orginal code
//console.log(this.responseText)
// code adding exception handling if file not found
if(this.status === 200)
{
let obj = JSON.parse(this.responseText)
console.log(obj);
let list = document.getElementById('list');
str = "";
for(key in obj)
{
    str += `<li> ${obj[key]}</li>`
}
list.innerHTML =str;
}
else{
console.log("Some error ocuured ");

}
}
}