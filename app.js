$(document).ready(function() {
	
	sortList();
	
	includeHTML('corenebula.github.io/pages/home.html');
	
	$('.fade-in').marginTop($(this).marginTop + 30).opacity(1);
	
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
