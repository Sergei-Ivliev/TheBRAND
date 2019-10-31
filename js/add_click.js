// $('.featured').click(event => {
//   if (event.currentTarget === $('.add-tocart')) {
//     console.log(event.currentTarget);
//     Cart.prototype._addProduct(event.currentTarget);
//     $('.minCartWrap').hide();
//     minCartListener();
//   }
// });
//
// $('.add-tocart').click(event => {
//   Cart.prototype._addProduct(event.currentTarget);
//     $('.minCartWrap').hide();
//     minCartListener();
//   console.log(event.currentTarget);
// });

  $('.add-tocart').click(event => {
    console.log(event.currentTarget);
    Cart.prototype._addProduct(event.currentTarget);
    $('.minCartWrap').hide();
    $('#theCart').mouseenter(() => {
      calculator._renderMinCart();
      $('#theCart').unbind("mouseenter");
    });
  });
