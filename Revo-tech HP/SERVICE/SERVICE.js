/*hamburgar-menu*/ 
window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('hamburger');
    var close = document.getElementById('close');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
        $('#close').css('display','block');
        $('#hamburger').css('display','none');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');

        $('#close').css('display','none');
        $('#hamburger').css('display','block');
    });

    close.addEventListener('click', function () {
        nav.classList.remove('open');
        $('#hamburger').css('display','block');
        $('#close').css('display','none');
    });
};

$(function(){
    var top = $('#page-top');
  
    top.click(function(){
      $('body,html').animate({
        scrollTop: 0}, 1000);
        return false;
    });
  });