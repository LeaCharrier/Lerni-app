var App = App || {};

var newCard = new App.Card();
// newCard.init();

var next = document.querySelector('.next');
var filter = document.querySelectorAll('.filter li');
var appReady = document.querySelectorAll('.ready-app');
var containSlider = document.querySelector('.contain-swip');

var helper = new App.Helper();

for (var i = 0; i < appReady.length; i++) {
    appReady[i].addEventListener('click', function () {
        console.log('e');
        containSlider.style.display='none';
        newCard.init();
    });
}

next.addEventListener('click', function () {
    newCard.init();
});

for (i = 0 ; i < filter.length; i++) {
    filter[i].addEventListener('click', function () {
        this.classList.toggle('checked');
        helper.filterCard();
    });
}


$(document).ready(function(){
  $('.contain-swip').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
});


