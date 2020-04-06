$(document).ready(function() {
	
	sortList();
	
	includeHTML('corenebula.github.io/pages/home.html');
	
	fadeIn();
		
	$('.open-menu').click(function() {
		$('.overlay').addClass('open');
	});

	$('.close-menu').click(function() {
		$('.overlay').removeClass('open');
		$('.fade-in').fadeTo(2000, 1, "swing").addClass("loaded");
	});
	
	$('li').click(function() {
		$('.overlay').removeClass('open');
	});
	
});
