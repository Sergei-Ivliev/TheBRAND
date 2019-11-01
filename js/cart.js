/**
 *
 * @type {{productDiv: HTMLCollectionOf<Element>, clearBtn: HTMLElement | null, deleteItemBtn: HTMLCollectionOf<Element>}}
 */
const elements = {
    productDiv: document.getElementsByClassName('product-in-cart'),
    clearBtn: document.getElementById('clear-shopping'),
    deleteItemBtn: document.getElementsByClassName('product-in-cart-action'),
};

const discount = {
    discountElem: document.getElementById('discount'),
    appCoupon: document.getElementById('apply-coupon'),
    discount: null,
    couponValue: '10',
};
let getDiscount = function () {
    discount.discount = null;
    if (discount.discountElem.value === discount.couponValue) {
        discount.discount = discount.couponValue;
        calculator.renderCalc();
    }
};

/**
 *
 * @type {{quantityInputs: HTMLCollectionOf<Element>, actualQuantity: number, itemPrice: NodeListOf<Element>, itemPriceSpan: NodeListOf<Element>, itemSubtotalPrice: NodeListOf<Element>, itemSubtotalPriceSpan: NodeListOf<Element>}}
 */
const quantity = {
    quantityInputs: document.getElementsByClassName('quantity-of-items'), // HTMLCollectionOf<Element>
    actualQuantity: 1, // Актуальное количечтво
    itemPrice: document.querySelectorAll('.product-in-cart'),// Установленная data-price
    itemPriceSpan: document.querySelectorAll('.product-in-cart-price span'), // отображаемая цена
    itemSubtotalPrice: document.querySelectorAll('.product-in-cart'), // Установленная data-subtotalprice
    itemSubtotalPriceSpan: document.querySelectorAll('.product-in-cart-subtotal span'), // отображаемая subtotal цена
};

/**
 *  отображаем цены из dataset
 */
let renderPrice = function () {
    for (let i = 0; i < elements.productDiv.length; i++) {
        quantity.itemPriceSpan[i].innerText = elements.productDiv[i].dataset.price;
        quantity.itemSubtotalPriceSpan[i].innerText = elements.productDiv[i].dataset.subtotalprice;
    }
};

quantity.quantityInputs.oninput = function (event) {
    getQuantity(event)
};

let getQuantity = function (event) {
    if (event.currentTarget.value >= 1) {  //Количество товара не мене одного
        quantity.actualQuantity = event.currentTarget.value;
    } else {
        quantity.actualQuantity = 1;
    }
    console.log(quantity.actualQuantity); // Значение количества товара после изменения
    quantity.itemPrice = event.currentTarget.closest('.product-in-cart');
    quantity.itemSubtotalPrice = event.currentTarget.closest('.product-in-cart');
    quantity.itemSubtotalPrice.dataset.subtotalprice = quantity.itemPrice.dataset.price * quantity.actualQuantity;
    calculator.renderCalc();
    renderPrice();
};

for (let i = 0; i < quantity.quantityInputs.length; i++) {
    quantity.quantityInputs[i].addEventListener('input', getQuantity);
}

const calculator = {
    subTotal: document.getElementById('sub-total-sum'),
    grandTotal: document.getElementById('grand-total-sum'),
    insertSubTotal: null,
    insertGrandTotal: null,
    myDiscount: this.insertSubTotal,
    discountSum: 0,
    actualGrandTotal: null,

    renderCalc: function () {
        this.insertSubTotal = 0;
        this.insertGrandTotal = 0;
        for (let i = 0; i < elements.productDiv.length; i++) {
            this.insertSubTotal += +elements.productDiv[i].dataset.subtotalprice;
            this.insertGrandTotal += +elements.productDiv[i].dataset.subtotalprice;
        }
        this.discountSum = this.insertGrandTotal / 100 * discount.discount;
        this.actualGrandTotal = this.insertGrandTotal - this.discountSum;
        this.subTotal.innerText = this.insertSubTotal;
        this.grandTotal.innerText = calculator.actualGrandTotal;
    },
};

calculator.renderCalc();

const remove = {
    removeOneItem: function () {
        this.closest('.product-in-cart').remove();
        calculator.renderCalc();
    },

    removeAllItems: function () {
        for (let i = 0; i < elements.productDiv.length; i++) {
            elements.productDiv[i].innerHTML = '';
            calculator.subTotal.innerText = '0';
            calculator.grandTotal.innerText = '0';
        }
    },
};

for (let i = 0; i < elements.deleteItemBtn.length; i++) {
    elements.deleteItemBtn[i].addEventListener('click', remove.removeOneItem);
}

elements.clearBtn.addEventListener('click', remove.removeAllItems);

discount.appCoupon.addEventListener('click', getDiscount);
renderPrice(window.onload);

