$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
  $(".close-menu"):hover(function () {
          $(this).removeClass('out').addClass('over');
        console.log('Ayy!');
  },function () {
          $(this).removeClass('over').addClass('out');
  });
  $("li"):hover(function () {
          $(this).removeClass('out').addClass('over');
  },function () {
          $(this).removeClass('over').addClass('out');
  });
});
