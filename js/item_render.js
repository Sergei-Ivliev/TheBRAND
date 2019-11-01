class Item {
    constructor(
        container,
        id,
        title,
        price,
        subtotalPrice,
        href,
        img,
        quantity,
        alt) {
        this.container = container;
        this.id = id;
        this.title = title;
        this.price = price;
        this.subtotalPrice = subtotalPrice;
        this.href = href;
        this.img = img;
        this.quantity = +quantity;
        this.alt = alt;
        this._render();
    }

    _render() {   // Отображение карточек товара на страницах
        let $featuredCard = $('<div/>', {
            class: 'featured-card',
            'data-idProduct': this.id,
            'data-productName': this.title,
            'data-price': this.price,
            'data-subtotalPrice': this.subtotalPrice,
            'data-href': this.href,
            'data-img': this.img,
            'data-quantity': this.quantity,
            'data-alt': this.alt
        });
        let $addTocart = $('<div/>', {class: 'add-tocart'});
        let $link = $('<a/>', {href: "javascript: void(0)"});
        let $linkImg = $('<img>', {
            src: "images/basket%20white.png",
            alt: "cartPic"
        });
        let $linkSpan = $('<span/>', {text: "Add to Cart"});
        let $featuredCardLink = $('<a/>', {
            class: "featured-card-img",
            href: "html/single_page.html"
        });
        let $itemImage = $('<img>', {
            src: this.img,
            alt: "pic"
        });
        let $featuredCardInfo = $('<div/>', {
            class: "featured-card-info"
        });
        let $model = $('<div/>', {
            class: "model"
        });
        let $modelSpan = $('<span/>', {
            text: this.title
        });
        let $price = $('<div/>', {
            class: "price"
        });
        let $priceSpan = $('<span/>', {
            text: "$ " + this.price
        });
        $featuredCard.appendTo(this.container);
        $addTocart.appendTo($featuredCard);
        $link.appendTo($addTocart);
        $linkImg.appendTo($link);
        $linkSpan.appendTo($link);
        $featuredCardLink.appendTo($featuredCard);
        $itemImage.appendTo($featuredCardLink);
        $featuredCardInfo.appendTo($featuredCard);
        $model.appendTo($featuredCardInfo);
        $modelSpan.appendTo($model);
        $price.appendTo($featuredCardInfo);
        $priceSpan.appendTo($price);

    }
}