$(document).ready(() => {

  //Корзина
  let cart = new Cart('json/indexCart.json');

  // Малая корзина
  $('.headerRight').mouseenter(() => {
    calculator._renderMinCart();
  });

  // Добавление товара index.html
  $('.add-tocart').click(event => {
    cart.addProduct(event.currentTarget);
  });


  // //Feedback
  // let feed = new Feedback('feedback.json');
  // // $('#cart').on('click', '.delBtn', e=>{})
});