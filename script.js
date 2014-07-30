$(function(){

	$(window).resize(function () {

        if($(window).height() > 650) {

        	$(".header__banner").height($(window).height());

        }

    }).resize()
	
	var offset_top = $('#navigation').offset().top;
	
	var navStick = function(){

		var scroll_top = $(window).scrollTop(); 

		if (scroll_top >= offset_top) { 

			$('#navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });

		} else {

			$('#navigation').css({ 'position': 'relative' }); 

		}   
	};
	
	$(window).scroll(function() {

		 navStick();

	});

	$('.header__quote').fadeIn(5000);

})