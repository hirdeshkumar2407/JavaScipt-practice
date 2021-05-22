$(document).ready(function () {
    console.log("we are using jQuery");
//jQUERY SYNTAX LOKS 
    //$('selector').action()
    //$('p').click(); // clicks on p html

  //demoing on the methdo
  $('p').on(
      
    { 
        click:function () {
      console.log("Thanks for clicking ", this);
  }, 
  mouseleave: function(){
      console.log("mouseleft")
  }
  

  })
/*
  //hide method hides in 1 second
  $('#wiki').hide(5000,function()
  {
      console.log("Helo")
  })
    //shows method hides in 1 second
  $('#wiki').show(5000,function()
  {
      console.log("Nelo")
  })
*/
/*$('#but').click(
    function(){
        $('#wiki').toggle(2000)
    }
);*/
/*$('#wiki').slideUp(1000)

$('#wiki').animate({
opacity:0.3,
height:'150px',
width: '350px'

},"slow")

}*/
$('#wiki').animate({opacity:0.3},1000);
$('#wiki').animate({opacity:0.9},1000);
$('#wiki').animate({width:'350px'},1000);

});