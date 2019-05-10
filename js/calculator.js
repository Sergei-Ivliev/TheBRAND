const calculator = {
  subTotal: $('#sub-total-sum'),
  grandTotal: $('#grand-total-sum'),
  insertSubTotal: null,   //Переменная для вычисления sub суммы
  insertGrandTotal: null,   //Переменная для вычисления total суммы
  discount: 0,
  actualGrandTotal: null,   //Переменная - итоговое значение total суммы

  _renderCalc: function () {
    this.insertSubTotal = 0;
    this.insertGrandTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      this.insertSubTotal += +cartItems[i].subtotalPrice;
      this.insertGrandTotal += +cartItems[i].subtotalPrice;
    }
    this.actualGrandTotal = this.insertGrandTotal;
    this.subTotal.text(this._rounded(this.insertSubTotal));
    this.grandTotal.text(this._rounded(this.actualGrandTotal));
  },

  _rounded: function (number) {
    return +number.toFixed(2);
  },

  _renderSubtotal: function (event) {
    let find = cartItems.find(product => product.idProduct === event.target.closest('.product-in-cart').dataset.id);
    if ((find) && (event.target.value >= 1)) {
      find.quantity = event.target.value;
      find.subtotalPrice = find.price * event.target.value - (find.price * event.target.value / 100 * this.discount);
      $('.inCartSubtoalSpan')[cartItems.indexOf(find)].textContent = (this._rounded(find.subtotalPrice));
      console.log(cartItems);
    } else {
      find.subtotalPrice = find.price;
      $(event.target).val(1);
    }
    this._renderCalc();
  },

  _renderMinCart: function () {
    console.log(cartItems);
    console.log($('.minProductData'));
    $('#qantityMin').text(cartItems.length);
    for (let i = 0; i < $('.minProductData').length; i++) {
      $('.minProductData')[i].children[2].textContent = (`Quantity: ${cartItems[i].quantity}`);
      $('.minProductData')[i].children[3].textContent = (`Amount: $ ${cartItems[i].subtotalPrice}`);
    }
    let minCartAmount = null;
    for (let i = 0; i < cartItems.length; i++) {
      minCartAmount += cartItems[i].subtotalPrice;
    }
    $('#amountMin').text(this._rounded(minCartAmount));
    $('.minCartWrap').fadeToggle();
  },

  _getDiscount: function () {
    let couponCode = $('#discount').val();
    fetch('../json/discount.json')
        .then(result => result.json())
        .then(data => {
          if (couponCode === data.couponContent) {
            this.discount = +data.discount;
            for (let i = 0; i < cartItems.length; i++) {
              cartItems[i].subtotalPrice = cartItems[i].subtotalPrice - cartItems[i].subtotalPrice / 100 * this.discount;
              $('.inCartSubtoalSpan')[i].textContent = (this._rounded(cartItems[i].subtotalPrice));
            }
          } else {
            this.discount = 0;
          }
          this._renderCalc();
          console.log(cartItems);
        });
  }
};