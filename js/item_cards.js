class ItemCard {
    constructor(source, container) {
        this.source = source;
        this.container = container;
        this._init();
    }

    _init() {
        let itemArray = [];
        // itemArray = [];
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents) {
                    itemArray.push(product);
                }
                for (let i = 0; i < itemArray.length; i++) {
                    let itemCard = new Item(
                        this.container = '.featured',
                        this.id = itemArray[i].idProduct,
                        this.title = itemArray[i].productName,
                        this.price = itemArray[i].price,
                        this.subtotalPrice = itemArray[i].subtotalPrice,
                        this.href = itemArray[i].href,
                        this.img = itemArray[i].img,
                        this.quantity = itemArray[i].quantity,
                        this.alt = itemArray[i].alt
                    );
                }
            });
    }
}