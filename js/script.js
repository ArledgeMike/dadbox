 $(document).ready(function() {
   var support = false;
  $('#ejectbutton').click(function () {
    $('.sc-player .sc-artwork-list, .sc-trackslist').slideDown();  
  });

  $('ol.sc-trackslist').on("click", function () {
	  console.log("clicked");
   $('.sc-artwork-list, .sc-trackslist').slideUp();
  });

  $('#support').on("click", function(){
    $('#dev_help').fadeIn();
    support = true;
  });
  
  $('#dev_help').on("click", function(){
  if (support){
    $(this).fadeOut(function(){
      support = false;
    });
    
  }
  });
});
