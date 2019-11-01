$(document).ready(() => {

    //Корзина - создание
    let thisSite = window.location.href;
    let pref;
    if (thisSite.includes('index')) {
        pref = '';
    } else {
        pref = '../';
    }
    let cartJson = pref + 'json/cart.json';
    let cart = new Cart(cartJson);


    // Малая корзина
    function minCartListener() {
        $('#theCart').mouseenter(() => {
            calculator._renderMinCart();
            $('#theCart').unbind("mouseenter");
        });
    }

    minCartListener();

    $('#closeMinCart').click(() => {
        $('.minCartWrap').hide();
        minCartListener();
    });


});