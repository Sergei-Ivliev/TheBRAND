class Product {
  constructor(id, title, price, subtotalPrice,
              href, img, quantity,
              container = '.cart-items',
              containerMin = '.minCartWrap') {
    this.id = id;
    this.title = title;
    this.price = price;
    this.subtotalPrice = subtotalPrice;
    this.href = href;
    this.img = img;
    this.quantity = +quantity;
    this.container = container;
    this.containerMin = containerMin;
    this._render();
    this._renderMin();
  }

  _render() {
    let $productInCart = $('<div/>', {
      class: 'product-in-cart',
      'data-id': this.id,
      'data-name': this.title,
      'data-price': this.price,
      'data-subtotalPrise': this.subtotalPrice,
      'data-href': this.href,
      'data-img': this.img,
      'data-quantity': this.quantity,
    });
    let $productInCartDetails = $('<div/>', {
      class: 'product-in-cart-details'
    });
    let $productInCartLink = $('<a/>', {
      class: 'product-cart-product',
      href: '../html/new_arrivals.html'
    });
    let $productInCartImage = $('<img/>', {
      src: this.img,
            alt: 'Some img'
    });
    let $productInCartPrice = $('<div/>', {
      class: 'product-in-cart-price',
    });
    let $productInCartPriceSpan = $('<span/>', {
      text: this.price
    });
    let $productInCartQuantity = $('<div/>', {
      class: 'product-in-cart-quantity',
    });
    let $productInCartQuantityInput = $('<input/>', {
      class: 'quantity-of-items',
      type: 'number',
      placeholder: '1',
      value: '1'
    });
    let $productInCartShipping = $('<div/>', {
      class: 'product-in-cart-shipping',
      text: 'free'
    });
    let $productInCartSubtoal = $('<div/>', {
      class: 'product-in-cart-subtotal',
    });
    let $productInCartSubtoalSpan = $('<span/>', {
      class: 'inCartSubtoalSpan',
      text: this.subtotalPrice
    });
    let $productInCartAction = $('<div/>', {
      class: 'product-in-cart-action'
    });
    let $productInCartActionI = $('<i/>', {
      class: 'fas fa-times-circle',
      title: 'Delete from cart'
    });
    $productInCart.appendTo(this.container);
    $productInCartDetails.appendTo($productInCart);
    $productInCartLink.appendTo($productInCartDetails);
    $productInCartImage.appendTo($productInCartLink);
    $productInCartPrice.appendTo($productInCart);
    $productInCartPriceSpan.appendTo($productInCartPrice);
    $productInCartQuantity.appendTo($productInCart);
    $productInCartQuantityInput.appendTo($productInCartQuantity);
    $productInCartShipping.appendTo($productInCart);
    $productInCartSubtoal.appendTo($productInCart);
    $productInCartSubtoalSpan.appendTo($productInCartSubtoal);
    $productInCartAction.appendTo($productInCart);
    $productInCartActionI.appendTo($productInCartAction);
  }

  _renderMin() {
    let $productInCartMin = $('<div/>', {// Блок одного товара
      class: 'product-in-cart-min',
      'data-id': this.id,
      'data-name': this.title,
      'data-price': +(this.price),
      'data-subtotalPrise': this.subtotalPrice,
      'data-quantity': +(this.quantity),
      'data-img': this.img,
    });
    let $minCartImage = $('<img/>', { // Фото
      class: 'imgInCartMin',
      src: this.img,
      height: '100px',
      width: 'auto',
      alt: 'Some img'
    });
    let $minProductData = $('<div/>', { // Данные товара
      class: 'minProductData'
    });
    $('.minCartWrap').hide();
    $productInCartMin.appendTo(this.containerMin);
    $minCartImage.appendTo($productInCartMin);
    $minProductData.appendTo($productInCartMin);
    $minProductData.append($(`<p>${this.title}</p>`));
    $minProductData.append($(`<p>Price: $ ${this.price}</p>`));
    $minProductData.append($(`<p></p>`));
    $minProductData.append($(`<p></p>`));
  }
}