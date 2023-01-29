		//wow
		new WOW().init();


		//toTop Button
		$(window).scroll(function(){
            last=$('body').height()-$(window).height()-50
            if($(window).scrollTop()>=last){
				$('#toTop').fadeOut(222)();
            } else if ($(this).scrollTop()<100){
				$('#toTop').fadeOut(222)();
			} else {
				$('#toTop').fadeIn(222)();
			}
        })

        // $(window).scroll(function(){
        //     //最後一頁scrollTop=body-window，50是預留空間
        //     last=$('body').height()-$(window).height()-50
        //     if($(window).scrollTop()>=last){
        //     $('#toTop').hide()
        //     }
        // })

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


		// bottom banner
		jQuery(document).ready(function () {

			'use strict';

			var c, currentScrollTop = 0,
				navbar = $('.bottom-b');

			$(window).scroll(function () {
				var a = $(window).scrollTop();
				var b = navbar.height();

				currentScrollTop = a;

				if (c < currentScrollTop && a > b + b) {
					navbar.addClass("scrollUp");
				} else if (c > currentScrollTop && !(a <= b)) {
					navbar.removeClass("scrollUp");
				}
				c = currentScrollTop;
			});

		});


		//openMenu Button
		$(function () {
			$('#openMenu').click(function () {
				$('html,body').animate({ scrollTop: 0 }, 333);
			});
			$(window).scroll(function () {
				if ($(this).scrollTop() > 300) {
					$('#openMenu').fadeIn(222);
				} else {
					$('#openMenu').stop().fadeOut(222);
				}
			}).scroll();
		});

		$(function () {
			//caches a jQuery object containing the header element
			var header = $(".navbar__bgcustom");
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();

				if (scroll >= 70) {
					header.addClass("scroll");
				} else {
					header.removeClass("scroll");
				}
			});
		});