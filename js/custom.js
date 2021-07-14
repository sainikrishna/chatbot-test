//custom js...
$(document).ready(function(){
	$('.selectpicker').selectpicker({});

	/* togmenu */
	$('.right-p .menu > a').click(function(){
		$('.right-p .s_nav').slideToggle();
	});
});


// Can also be used with $(document).ready()
$(window).load(function() {
  $('.homeBanner').flexslider({
    animation: "slide"
  });
});