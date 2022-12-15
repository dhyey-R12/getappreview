// on page scroll animations js
$(window).on('load',function() {
	$('.loader-wrapper').fadeOut('slow');
});

$(document).ready(function(){
	
	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$('body').toggleClass('no_scroll');
		$('.site_header').toggleClass('header_menu_active');
		$(this).toggleClass('open_menu');
		$(this).next("nav").toggleClass('navbar_animate');
	});

	// plan box slider js
	var $slider = $('.plan_box_slider');
	var $progressBar = $('.progress');
	var $progressBarLabel = $( '.slider__label' );

	$slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {   
		var currentDot = $(".slick-dots .slick-active").index() + 1;
		var dots = $slider.find('.slick-dots li').length;


		var calc = (currentDot/dots) * 100;

		$progressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );

		$progressBarLabel.text( calc + '% completed' );
	});

	$slider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 400,
		dots: true,
		infinite: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	// got to page top js
	/*$(window).on('load scroll',function(){
		var	windowTop = $(window).scrollTop();
		if(windowTop > 600) {
			$('.pagetop').fadeIn();
		} else {
			$('.pagetop').fadeOut();
		}

		if(windowTop > 100) {
			$('.site_header').addClass('header_sticky_active');
		}else{
			$('.site_header').removeClass('header_sticky_active');
		}
	});
	$('.pagetop').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 800);
	});*/
});