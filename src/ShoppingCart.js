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

module.exports = ShoppingCart;