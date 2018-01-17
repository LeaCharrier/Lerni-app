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
        var dataFact = data.fact;


        renderCountry();
        renderFact();
    });

    function renderCountry() {
        var country = helper.generateUniqueElement('p', 'country');
        country.innerHTML= dataCountry;
        container.appendChild(country);
    }

   function renderFact() {
       var fact = helper.generateUniqueElement('p', 'fact');
       fact.innerHTML= dataFact;
       container.appendChild(fact);
   }

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
                if(filter[i] === globalData[j].country.toLowerCase()) {
                    data.push(globalData[j]);
                }
            }
        }

    } else {
        data = globalData;
    }

    return data;
}








