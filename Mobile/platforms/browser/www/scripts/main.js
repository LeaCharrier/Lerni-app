var App = App || {};

var newCard = new App.Card();
newCard.init();

var next = document.querySelectorAll('.next');
var filters = document.querySelectorAll('.filter-slide');
var appReady = document.querySelectorAll('.ready-app');
var containSlider = document.querySelector('.contain-swip');
var filter = document.querySelector('.filter');

var helper = new App.Helper();

// for (var i = 0; i < appReady.length; i++) {
//     appReady[i].addEventListener('click', function () {
//         containSlider.style.display='none';
//         filter.classList.remove('container-filter-hidden');
//         newCard.init();
//     });
// }

for (i = 0 ; i < next.length; i++) {
    next[i].addEventListener('click', function () {
        newCard.init();
    });
}

for (i = 0 ; i < filters.length; i++) {
    filters[i].addEventListener('click', function () {
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

  $('.filter').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });
});


