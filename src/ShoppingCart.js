class ShoppingCart {
    constructor () {
        this.items = [];
    }

    getItems() {
        return this.items;
    }

    addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.map(item => parseFloat((item.quantity * item.pricePerUnit).toFixed(2)))
            .reduce((total, current) => total + current, 0)
    }

}

// const cart = new ShoppingCart();
// cart.addItem('rice', 1, 1.09);
// cart.addItem('beans', 1, 2.00);
// cart.addItem('beer', 6, 0.70);
// console.log(cart.getItems());
// console.log(cart.total());
// cart.clear();
// console.log(cart.getItems());


module.exports = ShoppingCart;