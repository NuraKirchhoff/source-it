 $(document).ready(function(){
	 /*** Block ***/
	 var maxHeight = 0;
	 $(".box,.block").each(function() {
        if ($ (this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
    });
      $(".box,.block").height(maxHeight);

	  /*** LIST ***/
	  $("li:first-child").css("color","red");
	  $("li:odd").css({"list-style-type": "decimal"});
	  $("li").click(function(){
		  $(this).siblings().removeClass("active");
		  $(this).addClass("active");
	  });
	  
	  /*** BUTTON ***/
	  $("button").click(function(e){
		  e.preventDefault();
		  $(':input','#form')
 		  .not(':button, :submit, :reset, :hidden')
 		  .val('');
	  });

 });