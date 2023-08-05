		//wow
		new WOW().init();


		//toTop Button
		$(document).ready(function(){
			var btn = $('#backToTop');
			$(window).on('scroll', function() {
				if ($(window).scrollTop() > 300) {
					btn.addClass('show');
				} else {
					btn.removeClass('show');
				}
			});
			btn.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: 0
				}, '300');
			});
		});


		//slider
		$('.responsive--slick').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
		$('.autoplay').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
		});


		//openMenu Button
		$(function () {
			$('#openMenu').click(function(){
				$('#menuPage').css("visibility","visible");
				$('.close-button').css("visibility","visible");
			});
		});

		//menuPage Close
		$(function () {
			$('.close-button').click(function(){
				$('#menuPage').css("visibility","hidden");
				$('.close-button').css("visibility","hidden");
			});
		});

		//top info
		$(function () {
			$('.p-top__work').mouseover(function(){
				$('.p-top__info').toggle().css("visibility","visible");
			});
		});