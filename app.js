$(document).ready(function() {
	
	sortList();
	
	includeHTML('corenebula.github.io/pages/home.html');
	
	$('.open-menu').click(function() {
		$('.overlay').addClass('open');
	});

	$('.close-menu').click(function() {
		$('.overlay').removeClass('open');
		$('.fade-in').fadeTo(1, slow, "swing");
	});
	
	$('li').click(function() {
		$('.overlay').removeClass('open');
	});
	
});
