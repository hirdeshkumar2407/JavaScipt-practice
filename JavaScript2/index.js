// DOM manipulation

//To manipuate by id
let elem = document.getElementById('click');/*acess by id */
//console.log(elem);
//To manipuate by class
let elemClass= document.getElementsByClassName('container'); /*acess by conyaineer */
//console.log(elemClass);

//elemClass[0].style.background='yellow';
elemClass[0].classList.add("bg-primary") /*add css  */
elemClass[0].classList.add("task-success")
//elemClass[0].classList.remove("task-success") /*remove css elements*/

//console.log(elem.innerHTML);// click me

//console.log(elem.innerText);//click me
//To manipuate by html
//console.log(elemClass[0].innerHTML);//html acceess

//To manipuate by text
//console.log(elemClass[0].innerText);//inner text acess

// access by tag
/*
tn =document.getElementsByTagName('button');
console.log(tn);*/
/*
//Add html through javaScript parent to child 
tn=document.getElementsByTagName('div'); //accessing  takke
console.log(tn);
createElement=document.createElement('p'); //Accesisg div p
createElement.innerText="This is created page";
tn[0].appendChild(createElement);
*/

//replace child elements
tn=document.getElementsByTagName('div'); //accessing  takke
console.log(tn);
createElement=document.createElement('p'); //Accesisg div p
createElement.innerText="This is created page";
tn[0].appendChild(createElement);
createdElement2=document.createElement('b');
createdElement2.innerText="This is created bold";
tn[0].replaceChild(createdElement2,createElement);
//removeChild(element); ---> remove child element
//Select first html class or id
sel = document.querySelector('.container')
console.log(sel)
//Select first all html class or id
sel = document.querySelectorAll('.container')
console.log(sel)


function clicked()
{
console.log('The button is clicked');
}

window.onload=function ()
{
    console.log('The document is clicked');
}

// Events in JavaScripts
/*
//ID EVENT
firstContainer.addEventListener('click',function()//click
{
    console.log("Clicked first cotainer");


})

firstContainer.addEventListener('mouseover',function()// like css pusedo hover in
{
 
    console.log("Mouseover first cotainer");
})

firstContainer.addEventListener('mouseout',function()// like css pusedo hover out
{
 
    console.log("Mouseover first out cotainer");
})
*/
/*
firstContainer.addEventListener('mouseup',function(){
    console.log("Mouse up when clicked on Container");
})


firstContainer.addEventListener('mousedown',function(){
    console.log("Mouse down when clicked on Container");
})

*/
/*
firstContainer.addEventListener('click',function (){
    document.querySelectorAll('.container')[1].innerHTML = " <b> We have clicked </b>"
    console.log("Clicked on Event")
}
*/
/* change html element
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");

})


firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML = " <b> We have clicked </b>"
    console.log("Mouse down when clicked on Container");

})





*/

/*this is down arrow inc
function sum (a,b){
    return a+b
}*/
/*like*/
sum  =(a,b) =>{
    return a+b;
}

logkaro = () =>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set interval fired</b>";
    console.log("logkaro kaam kara raha hai")
}
//We schedule event. first argument is functio
///second arguement is time in millisecon

//setTimeout(logkaro,2000);

//Repeats the interval 
//setInterval(logkaro,2000);
// clr  we give id to terminate inthe clearInterval(clr) or clearTimeout(clr)
//clr=setInterval(logkaro,2000);

//local storage
//localStorage.setItem('name','hirdesh') add date
//localStorage.clear() clears all data
//localStorage  shows all data
// localStorage.getItem('name') to retrive an item 
//localStorage.removeItem('name')


//JSON script  converts object into string. it is 
/*obj = {name: "harry", length: 1}
jso = JSON.stringify(obj);// way one to covert obj to string
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)// way two to covert obj to string
console.log(parsed);
*/
//Template literal -backticks
a = 35;
console.log(`This is my ${a} `)