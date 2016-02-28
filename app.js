$(".divone").click(function(){
  $(this).toggle('blind');
})

$(".divtwo").hover(function(){
  $(this).css("background-color", "orange");
}, function(){
  $(this).css("background-color", "blue");
});

$(".divtwo").click(function(){
  $(".divone").show("slow");
});

$(".divthree").click(function(){
  $(this).toggle("slide");
});

$(".divfour").click(function(){
  $(".divthree").show("slow");
});
$(".divfour").hover(function(){
  $(this).fadeToggle("slow");
});


$(".container1").hover(function(){
  $(this).css("width", "100%");
}, function(){
  $(this).css("width", "84%");
});
