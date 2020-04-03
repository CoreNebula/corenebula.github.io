$(document).ready(function() {
	
	sortList();
	
	includeHTML('corenebula.github.io/pages/home.html');
	
	$('.fade-in').ready(function() {
		$('.fade-in').fadeToggle(1000, "swing");
	});
	
	$('.open-menu').click(function() {
		$('.overlay').addClass('open');
	});

	$('.close-menu').click(function() {
		$('.overlay').removeClass('open');
	});
	
	$('li').click(function() {
		$('.overlay').removeClass('open');
	});
	
});
