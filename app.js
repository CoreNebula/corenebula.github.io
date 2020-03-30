$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});
$(".close-menu").hover(
    function () {
        $(".close-menu").removeClass('out').addClass('over');
      console.log('Ayy!');
    },
    function () {
        $(".close-menu").removeClass('over').addClass('out');
    }
);
$("li").hover(
    function () {
        $("li.hover").removeClass('out').addClass('over');
    },
    function () {
        $("li.hover").removeClass('over').addClass('out');
    }
);
