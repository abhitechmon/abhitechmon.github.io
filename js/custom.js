// makes sure the whole site is loaded
	jQuery(window).load(function() {
        // will first fade out the loading animation
    jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(1000).fadeOut("slow");
})



jQuery(document).ready(function($) {

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
	
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
		},
		end: function() {
			console.log('stop');
		},
			scrollOffset: 0		
	});
	
	// prettyPhoto
	$("a[data-pretty^='prettyPhoto']").prettyPhoto();		

    // Localscrolling 
	$('#menu-main, .brand').localScroll();
	
	$('#menu-main li a').click(function(){
		var links = $('#menu-main li a');
		links.removeClass('selected');
		$(this).addClass('selected');
	});

    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }	
	
    if (iOS === false) {

        $('.flyIn').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInUp');
            }
        });

        $('.flyLeft').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInLeftBig');
            }
        });

        $('.flyRight').bind('inview', function (event, visible) {
            if (visible === true) {
                $(this).addClass('animated fadeInRightBig');
            }
        });

    }
	
	// add animation on hover
		$(".service-box").hover(
			function () {
			$(this).find('img').addClass("animated pulse");
			$(this).find('h2').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('img').removeClass("animated pulse");
			$(this).find('h2').removeClass("animated fadeInUp");
			}
		);
		
	
	// cache container
	var $container = $('#portfolio-wrap');
	$.browser.safari = ($.browser.webkit && !(/chrome/.test(navigator.userAgent.toLowerCase())));	
	
	if($.browser.safari){ 	
	// initialize isotope
	$container.isotope({
		animationEngine : 'jquery',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});
	} else {	
	$container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});	
	
	$(window).resize(function() {
		$container.isotope('reLayout');
	});
	}
	// filter items when filter link is clicked
	$('#filters a').click(function(){
		$('#filters a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

	// flexslider main
	$('#main-flexslider').flexslider({						
		animation: "swing",
		direction: "vertical", 
		slideshow: true,
		slideshowSpeed: 3500,
		animationDuration: 1000,
		directionNav: true,
		prevText: '<i class="icon-angle-up icon-2x"></i>',       
		nextText: '<i class="icon-angle-down icon-2x active"></i>', 
		controlNav: false,
		smootheHeight:true,						
		useCSS: false
	});
});
	
jQuery(document).ready(function () {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		});		

//timeline
		$(function () {
			$("li").slice(0, 3).show(); // select the first 3
			$("#loadmore").click(function (e) { // click event for load more
				e.preventDefault();
				$("li:hidden").slice(0, 3).fadeIn("slow"); // select next 10 hidden divs and show them

			});
		});

		// our process
		$(".step").click(function () {
			$(this).addClass("active").prevAll().addClass("active");
			$(this).nextAll().removeClass("active");
		});

		$(".step01").click(function () {
			$("#line-progress").css("width", "0%");
			$(".discovery").addClass("active").siblings().removeClass("active");
		});

		$(".step02").click(function () {
			$("#line-progress").css("width", "25%");
			$(".strategy").addClass("active").siblings().removeClass("active");
		});

		$(".step03").click(function () {
			$("#line-progress").css("width", "50%");
			$(".creative").addClass("active").siblings().removeClass("active");
		});

		$(".step04").click(function () {
			$("#line-progress").css("width", "75%");
			$(".production").addClass("active").siblings().removeClass("active");
		});

		$(".step05").click(function () {
			$("#line-progress").css("width", "100%");
			$(".analysis").addClass("active").siblings().removeClass("active");
		});

//links
$(".callus").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
$(".whatsup").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
$(".emailus").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
//links end

// position career
// $(".Backend").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Flutter").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Designing").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Sales").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Business").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Legal").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Data").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".HR").click(function() {
//   window.location = $(this).find("a").attr("href"); 
//   return false;
// });
// $(".Video").click(function() {
//   window.location = $(this).find("a").attr("href");
//   return false;
// });

// position career END

$(document).ready(function(){
    $('.venobox').venobox(); 
});