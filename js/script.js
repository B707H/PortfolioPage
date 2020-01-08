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

});

