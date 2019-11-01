class Product {
    constructor(id, title, price, subtotalPrice,
                href, img, quantity, alt,
                container = '.cart-items',
                containerMin = '.minCartContent') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.subtotalPrice = subtotalPrice;
        this.href = href;
        this.img = img;
        this.quantity = +quantity;
        this.alt = alt;
        this.container = container;
        this.containerMin = containerMin;
        this._render();
        this._renderMin();
    }

    _render() {   // Отображение товаров на странице корзины
        let $productInCart = $('<div/>', {
            class: 'product-in-cart',
            'data-id': this.id,
            'data-name': this.title,
            'data-price': this.price,
            'data-subtotalPrice': this.subtotalPrice,
            'data-href': this.href,
            'data-img': this.img,
            'data-quantity': this.quantity,
            'data-alt': this.alt
        });
        let $productInCartDetails = $('<div/>', {
            class: 'product-in-cart-details'
        });
        let $productInCartLink = $('<a/>', {
            class: 'product-cart-product',
            href: '../html/new_arrivals.html'
        });
        let $productInCartImage = $('<img/>', {
            src: '../' + this.img,
            alt: 'Some img',
            width: '125px'
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
        let $productInCartSubtotal = $('<div/>', {
            class: 'product-in-cart-subtotal',
        });
        let $productInCartSubtotalSpan = $('<span/>', {
            class: 'inCartSubtotalSpan',
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
        $productInCartSubtotal.appendTo($productInCart);
        $productInCartSubtotalSpan.appendTo($productInCartSubtotal);
        $productInCartAction.appendTo($productInCart);
        $productInCartActionI.appendTo($productInCartAction);
    }

    _renderMin() {    // Формирование товаров в выпадающем блоке корзины ПРИ ЗАГРУЗКЕ
        let $productInCartMin = $('<div/>', {// Блок одного товара
            class: 'product-in-cart-min',
            'data-id': this.id,
            'data-name': this.title,
            'data-price': +(this.price),
            'data-subtotalPrice': this.subtotalPrice,
            'data-quantity': +(this.quantity),
            'data-img': this.img,
        });
        let thisSite = window.location.href;
        let pref = '../';
        if (thisSite.includes('index')) {
            pref = '';
        }
        let $minCartImage = $('<img/>', { // Фото
            class: 'imgInCartMin',
            src: pref + this.img,
            height: '100px',
            width: 'auto',
            alt: 'Some img'
        });
        let $minProductData = $('<div/>', { // Данные товара
            class: 'minProductData'
        });
        $productInCartMin.appendTo(this.containerMin);
        $minCartImage.appendTo($productInCartMin);
        $minProductData.appendTo($productInCartMin);
        $minProductData.append($(`<p>${this.title}</p>`));
        $minProductData.append($(`<p>Price: $ ${this.price}</p>`));
        $minProductData.append($(`<p></p>`));
        $minProductData.append($(`<p></p>`));
        $('.minCartWrap').hide();
    }
}