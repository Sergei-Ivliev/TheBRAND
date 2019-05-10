$(document).ready(() => {

  //Корзина
  let cart = new Cart('json/indexCart.json');

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

  // Добавление товара index.html
  $('.add-tocart').click(event => {
    cart.addProduct(event.currentTarget);
    $('.minCartWrap').hide();
    minCartListener();
  });


  // //Feedback
  // let feed = new Feedback('feedback.json');
  // // $('#cart').on('click', '.delBtn', e=>{})
});