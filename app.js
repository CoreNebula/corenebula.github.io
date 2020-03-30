$(document).ready(function() {
  sortList();
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
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
});
