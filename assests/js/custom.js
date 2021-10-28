
//toggle menu jquery
$(function(){
    $(".toggle").click(function(){
      $("header nav .collapse .navbar-nav").toggle();
    });
  });

  //include header and footer jquery
  $("header").load("../include/header.html");
  $("footer").load("../include/footer.html");

  //seech box in header jquery
  $(document).ready(function () {
    $("body").click(function(event) {
        $(".wrapper-search-form").hide(600);
        event.stopPropagation();
    });

    $(".bi-search").click(function () {
        $(".wrapper-search-form").css("display","flex");
        event.stopPropagation();
    });

    $(".wrapper-search-form").click(function () {
        event.stopPropagation();
    });
    
});





//auto type box jquery
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js", 100);
});



//owl-carausel main slider
$('#main-slider').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})


