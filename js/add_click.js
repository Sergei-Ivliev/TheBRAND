$('.add-tocart').click(event => {
    console.log(event.currentTarget);
    Cart.prototype._addProduct(event.currentTarget);
    $('.minCartWrap').hide();
    $('#theCart').mouseenter(() => {
        calculator._renderMinCart();
        $('#theCart').unbind("mouseenter");
    });
});
