class Product {
    constructor(id, sku, description, qty) {
      this.id = id;
      this.sku = sku;
      this.description = description;
      this.qty = qty;
    }
}

function classuse(){
    let p1 = new Product(1, 1001478259, "12x24 grey carpet", 14);
    let p2 = new Product(2, 1007895475, "5x5 THS White Marble", 26);
    var r = [p1, p2];
    return r;
}