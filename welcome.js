$(document).ready(function(){
  $(".right").addClass("animated bounce");
  $(".left").css("animation-duration", "5s").addClass("bounceOutRight");
  $(".right").css("animation-delay","2s");
  $(".right").addClass("slideOutUp");
  $("#disappear").fadeOut(8000);
  $("#disappear").fadeIn(15000);
  $("#disappear").fadeOut(24000);
  $("#disappear").fadeIn(30000);
  $("#disappear").fadeOut(34000);
  $("#disappear").fadeIn(40000);
  
  
  $(".touch").click(function(){
    $(this).fadeOut("slow"); 
  })
  $("#door").click(function(){
    $("#city").fadeIn("slow");
    $("#door").effect("bounce", {times:5}, 1500);
  });
  $("#ball").hover(
    function() {
    $("#ball").addClass("red")
    },
    function() {
      $("#ball").removeClass("red")  
    }  
  );
  $(document).keydown(function(arrow) {
    switch(arrow.which) {
        //Left arrow pressed
      case 37:
        $(".fly").animate({left: "+=10px"}, "fast");
        break;
       //Top arrow pressed
      case 38:
        $(".fly").animate({top: "-=10px"}, "fast");
        break;
        //Right arrow pressed
      case 39:
        $(".fly").animate({left: "+=10px"}, "fast");
        break;
        //Bottom arrow pressed
      case 40:
        $(".fly").animate({top: "+=10px"}, "fast");
       }
  })
  $(".explode").click(function(){
    $(".explode").effect("explode");
  });
  $(".bottom-right").click(function(){
  $(".bottom-right").effect("bounce", {times:10}, 5000);
  });
  $("#getMessage").on("click", function(){
    $(".message").html("Tuna is in abundant supply on planet Katonite, all cats are welcome.")
  });

  $(".cloud").on('mouseenter', function(){
    $(this).animate({'left':'100px', opacity:1}, 'fast');
 })
 $(".cloud").on('mouseleave', function(){
     $(this).animate({'left':'50px', opacity:0.1}, 'slow');
  });
 
  //});
});