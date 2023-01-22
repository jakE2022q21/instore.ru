const swiper = new Swiper('.swiper', {
    // Optional parameters
   
    loop: true,
   effect: 'flip',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
});

$(document).ready(function(){
  $('.burger_moble').click(function(event){
    $('.burger, .burger_menu').toggleClass('active')
    $('body').toggleClass('lock');
   });
});