$(document).ready(function() {
	
	sortList();
	
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
