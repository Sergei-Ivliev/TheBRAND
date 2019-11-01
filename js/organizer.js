function addScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}

addScript("js/calculator.js");
addScript("js/product.js");
addScript("js/cart3.js");
addScript("js/item_render.js");
addScript("js/main_index.js");
addScript("js/item_cards.js");
addScript("js/card_render.js");
setTimeout(function () {
    addScript("js/add_click.js")
}, 3000);