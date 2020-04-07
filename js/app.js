$(document).ready(function() {
	
	sortList();
	
	includeHTML('corenebula.github.io/pages/home.html');
		
	$('.open-menu').click(function() {
		$('.overlay').addClass('open');
	});

	$('.close-menu').click(function() {
		$('.overlay').removeClass('open');
	});
	
	$('li').click(function() {
		$('.overlay').removeClass('open');
	});
	
	$(window).scroll(function() {
		var i, z, elmnt, elmntTop, elemntBttm;
		z = docoment.getElementsByClass('fade-in');
		for (i=0;i < (z.length - 1);i++) {
			elmnt = z[i];
			if ((elmnt.offsetTop < window.innerHeight)&&(elmnt.offsetTop > 60)) {
				$(elmnt).addClass('in');
			}
			else {
				$(elmnt).removeClass('in');
			}
		}
	});
});
