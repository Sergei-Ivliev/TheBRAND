$(document).ready(() => {

  //Корзина
  let cart = new Cart('../json/cart.json');


  // Удаление 1 предмета
  $('.cart-items').on('click', '.product-in-cart-action', () => {
    cart._remove(event);
  });

  // Удаление всей корзины
  $('#clear-shopping').click(event => {
    cart._removeAll(event);
  });

  // Обработчики количества в input
  $('.cart-items').on('change click', '.quantity-of-items', () => {
    calculator._renderSubtotal(event);
  });

  // Discount
  $('#apply-coupon').on('click', () => {
    calculator._getDiscount();
  });

  // Малая корзина
  // На странице корзины не нужна

  // $('.headerRight').mouseenter(() => {
  //   calculator._renderMinCart();
  // });


  // Добавление товара index.html
  // $('.add-tocart').click(event => {
  //   cart.addProduct(event.currentTarget);
  // });

  // //Добавление товара

  // $('.buyBtn').click(e => {
  //   cart.addProduct(e.target);
  // });
  //


  // //Feedback
  // let feed = new Feedback('feedback.json');
  // // $('#cart').on('click', '.delBtn', e=>{})
});