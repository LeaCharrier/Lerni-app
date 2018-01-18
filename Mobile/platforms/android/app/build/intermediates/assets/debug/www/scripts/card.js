var App = App || {};

App.Card = function() {
    this.init = function(){
        var helper = new App.Helper();
        createCard(helper);
    };
};

function createCard(helper) {
    var container = document.querySelector('.card');

    container.innerHTML = '';

    renderCardContent(helper, function(data) {
        var dataCountry = data.country;
        var dataCategory = data.category;
        var dataCategoryColor = data.category_color;
        var dataFact = data.fact;
        var dataImg = data.image;

        renderCardUi();

        var cardUi = document.querySelector('#card-ui');
        cardUi.classList.add('transition');

        renderFigure();
        renderFact();
        renderCountry();
        renderCategory();

        container.style.borderBottom = dataCategoryColor + ' solid 5px';


        function renderCardUi() {
            var cardUi = helper.generateUniqueElement('div', 'card-ui');
            container.appendChild(cardUi);
        }

        function renderCountry() {
            var country = helper.generateUniqueElement('span', 'country');
            country.innerHTML= dataCountry;
            cardUi.appendChild(country);
        }

        function renderCategory() {
            var category = helper.generateUniqueElement('span', 'category');
            category.style.background = dataCategoryColor;
            category.innerHTML= dataCategory;
            cardUi.appendChild(category);
        }

        function renderFact() {
            var fact = helper.generateUniqueElement('p', 'fact');
            fact.innerHTML= dataFact;
            cardUi.appendChild(fact);
        }

        function renderFigure() {
            var img = helper.generateUniqueElement('img', 'card-img');
            img.setAttribute('src', dataImg);
            cardUi.appendChild(img);
        }

    });


}

function renderCardContent(helper, callback) {

    $.getJSON('card.json')
        .done(function (resposne) {

            var dataCards = resposne.cards;
            var data = filterData(helper, dataCards);

            callback(data[randomCardContent()]);

            function randomCardContent() {
                return Math.floor(Math.random() * data.length);
            }

        });

}

function filterData(helper, globalData) {
    var filter = helper.filterCard();
    var data = [];

    if (filter.length !== 0) {

        for(i = 0 ; i < filter.length ; i++) {
            for(j = 0 ; j < globalData.length ; j++) {
                if(filter[i] === globalData[j].category_id) {
                    data.push(globalData[j]);
                }
            }
        }

    } else {
        data = globalData;
    }

    return data;
}








