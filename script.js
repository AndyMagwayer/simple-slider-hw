jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
  
    const slideCount = $('#slider ul li').length;
    const slideWidth = $('#slider ul li').width();
    const slideHeight = $('#slider ul li').height();
    const slideUlWidth = slideCount * slideWidth;

    $('#slider').css({width: slideWidth, height:slideHeight });


    $('#slider ul').css({width: sliderUlWidth, marginLeft - slideWidth});

    $('#slider ul li:last-child').prependTo('#slider ul');


    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };


    
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };