$(function(){

	//set bg image to display height
	$(window).resize(function () {

        $(window).height() > 650 && $(".header__banner").height($(window).height())

    }).resize()

    // find initial nav offset
	var offset_top = $('#navigation').offset().top;
	
	var navStick = function(){

		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > offset_top) { 

			$('#navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });

		} else {

			$('#navigation').css({ 'position': 'relative' }); 

		}   
	};
	
	// run onload
	navStick();
	
	// run on scroll
	$(window).scroll(function() {

		 navStick();

	});

	//fluff
	$('.header__quote').fadeIn(5000);

})