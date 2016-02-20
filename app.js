$(".divone").click(function(){
  $(this).toggle('blind');
})

$(".divtwo").hover(function(){
  $(this).css("background-color", "gray");
}, function(){
  $(this).css("background-color", "blue");
})
