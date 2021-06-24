console.log("Calaculator");

var u1=prompt("Enter a number");
var u2=prompt("Enter a number");

var ope=prompt("Enter operator + , -, / ,*") ;

if(ope==="+")
{
 console.log("ADD:"+ (parseInt(u1)+parseInt(u2)))   
}

else if(ope==="-")
{
 console.log("SUB:"+ (parseInt(u1)-parseInt(u2)))   
}

else if(ope==="*")
{
 console.log("MUL:"+ (parseInt(u1)*parseInt(u2)))   
}
else if(ope==="/")
{
 console.log("DIV:"+ (parseInt(u1)/parseInt(u2)))   
}

else{

    console.log("Wrong Operator")
}