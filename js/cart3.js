let cartItems = [];

class Cart {
  constructor(source, container = 'grand-total-block') {
    this.source = source;
    this.container = container;
    this._init(this.source);
  }

  _init(source) {
    fetch(source)
        .then(result => result.json())
        .then(data => {
          for (let product of data.contents) {
            cartItems.push(product);
          }
          for (let i = 0; i < cartItems.length; i++) {
            let product = new Product(
                this.id = cartItems[i].idProduct,
                this.title = cartItems[i].productName,
                this.price = cartItems[i].price,
                this.subtotalPrice = cartItems[i].subtotalPrice,
                this.href = cartItems[i].href,
                this.img = cartItems[i].img,
                this.quantity = cartItems[i].quantity);
          }
          calculator._renderCalc();
          $('#markerSpan').text(cartItems.length);
        });
  }

  _remove(event) {
    event.target.closest('.product-in-cart').remove();
    let find = cartItems.find(product => product.idProduct === event.target.closest('.product-in-cart').dataset.id);
    cartItems.splice(cartItems.indexOf(find), 1);
    calculator._renderCalc();
  }

  _removeAll() {
    $('.product-in-cart').remove();
    cartItems = [];
    calculator._renderCalc();
  }


  _renderItem(product) { // Отображение товаров в выпадающем блоке корзины ПРИ ДОБАВЛЕНИИ
    let $productInCartMin = $('<div/>', {// Блок одного товара
      class: 'product-in-cart-min',
      'data-name': product.productName,
      'data-price': product.price,
      'data-subtotalPrice': product.subtotalprice,
      'data-img': product.img,
      'data-quantity': product.quantity,
    });
    let $minCartImage = $('<img/>', { // Фото
      class: 'imgInCartMin',
      src: product.img,
      height: '100px',
      width: 'auto',
      alt: 'Some img'
    });
    let $minProductData = $('<div/>', { // Данные товара
      class: 'minProductData'
    });
    $productInCartMin.appendTo($('.minCartContent'));
    $minCartImage.appendTo($productInCartMin);
    $minProductData.appendTo($productInCartMin);
    $minProductData.append($(`<p>${product.productName}</p>`));
    $minProductData.append($(`<p>Price: $ ${product.price}</p>`));
    $minProductData.append($(`<p>${product.subtotalPrice}</p>`));
    $minProductData.append($(`<p></p>`));
  }

  _addProduct(element) {    // Добавление товара в корзину (на всех страницах)
    console.log('ELEMENT: ' + $(element.parentNode).data('idproduct'));
    // if (sessionStorage.getItem($(element.parentNode).datas('idproduct'))) {
    //   sessionStorage[$(element.parentNode).data('quantity')]++;
    // } else {
    //   sessionStorage.setItem($(element.parentNode), 1);
    // }
    let product = {
      idProduct: $(element.parentNode).data('idproduct'),
      productName: $(element.parentNode).data('productname'),
      price: $(element.parentNode).data('price'),
      subtotalPrice: $(element.parentNode).data('subtotalprice'),
      href: $(element.parentNode).data('href'),
      img: $(element.parentNode).data('img'),
      quantity: 1,
      alt: $(element.parentNode).data('alt')
    };
    // sessionStorage.setItem(product, 1);
    // console.log(sessionStorage);

    let find = cartItems.find(product => product.idProduct === $(element.parentNode).data('idproduct'));
    if (!find) {
      cartItems.push(product);
      console.log(cartItems);
      this._renderItem(product);
    } else {
      find.subtotalPrice = find.price * find.quantity - find.subtotalPrice / 100 * calculator.discount;
      find.quantity++;
    }
    calculator._renderCalc();
    calculator._renderMinCart();
    $('.minCartWrap').hide();
  }
}
