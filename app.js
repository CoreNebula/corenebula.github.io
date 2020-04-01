$(document).ready(function() {
	
	sortList();
	
	$('.open-menu').click(function() {
		$('.overlay').addClass('open');
		location.href = "./index.html";
	});

	$('.close-menu').click(function() {
		$('.overlay').removeClass('open');
		location.href = "./pages/home"
	});
	
	$('li').click(function() {
		$('.overlay').removeClass('open');
	});
	
});
