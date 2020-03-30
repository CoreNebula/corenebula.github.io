$(document).ready(function() {
  sortList();
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
  $(".close-menu").hover(function () {
          $(this).removeClass('out').addClass('over');},
  function () {
          $(this).removeClass('over').addClass('out');}
  );
  $("li").hover(function () {
          $(this).animate({
                    fontSize:"175%"
          },350,swing)},
          function () {
          $(this).animate({
                    fontSize:"150%"
          },350,swing);
  });
});
