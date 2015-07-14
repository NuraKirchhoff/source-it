 $(document).ready(function(){
	 /*** Block ***/
	 var maxHeight = 0;
	 $(".box").each(function() {
        if ($ (this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
    });
      $(".box").height(maxHeight)
	  
	  $(".block").each(function() {
        if ($ (this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
    });
      $(".block").height(maxHeight);
	  
	/*  var maxHeight = 0;
	 var calcHeight = function(){
		 if ($ (this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
		return maxHeight;
	 };
	 $(".box").each(function() {
		var maxHeight = calcHeight();
    });
      $(".box").height(maxHeight);*/
	  
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