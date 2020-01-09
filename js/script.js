$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
	});

	var typed = new Typed(".typed", {
		strings: ["Junior Software Engineer.", "Back-end Developer.", "Lifelong Learner."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1100,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	})

	
	var skillsTopOffset = $(".skillsSection").offset().top;
	
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
			           easing: 'easeInOut',
			           barColor: '#fff',
			           trackColor: false,
			           scaleColor: false,
			           lineWidth: 4,
			           size: 152,
			           onStep: function(from, to, percent) {
			           	 $(this.el).find('.percent').text(Math.round(percent));
			           }

			    });
		}

	});


	$(function() {
		if(document.body.scrollTop === 0){
			$(".scroll-downs").delay(4000).fadeIn();
		}
	});

	$(window).bind('scroll', function() {
	     if ($(window).scrollTop() > 100) {
	         $('.scroll-downs').fadeOut();
	     }

	});


	$("[data-fancybox]".fancybox());

});
