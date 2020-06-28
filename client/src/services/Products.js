
class ProductService {
    constructor() {
        this.products = [];
    }

    fetchProducts = async () => {
        const data = await fetch('products');
        this.products = await data.json();
        return this.products;
    }
}

module.exports = ProductService;