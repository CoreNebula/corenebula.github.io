$(document).ready(function() {
	
  $('.open-menu').click(function() {
     $('.overlay').toggleClass('open');
  });

  $('.close-menu').click(function() {
    $('.overlay').toggleClass('open');
  });
	
  $(".close-menu").hover(function () {
     $(this).toggleClass('over')
	},
  function () {
     $(this).toggleClass('over')
	});
	
  $("li").hover(function () {
  	$(this).toggleClass('over')
  },
    function () {
  		$(this).toggleClass('over')
  });
	
  $(".open-menu").hover(function () {
     $(this).toggleClass('over')
	},
  function () {
     $(this).toggleClass('over')
	});
});
