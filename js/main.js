$(document).ready(function() {
	$(".button-collapse").sideNav();
	$(".carousel.carousel-slider").carousel({
		fullWidth: true,
		indicators: true,
		duration: 500,
		noWrap: true
	});
	$(".parallax").parallax();
	$(".modal").modal({
		dismissible: false,
		opacity: .9,
		inDuration: 500,
		outDuration: 500,
		startingTop: '100%',
		endingTop: '20%',
	});
})