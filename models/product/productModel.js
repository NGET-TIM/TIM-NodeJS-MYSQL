var dbConn = require('../../config/db.config');

var Product = function(product) {
    this.name = product.name;
    this.code = product.code;
    this.weight = product.weight;
    this.cost = product.cost;
    this.price = product.price;
    this.quantity_alert = product.quantity_alert;
    this.quantity = product.quantity;
    this.image = product.image;
    this.description = product.description;
    this.image = product.image;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.created_by = new Date();
}

// get all Products
Product.getAllProducts = (result) => {
    const $sql = 'SELECT * FROM tim_products WHERE is_deleted = 0';
    dbConn.query($sql, (err, res) => {
        if (err) {
            console.log('Error while fetching product', err);
            result(null, err);
        } else {
            console.log('Products fetched successfully');
            result(null, res);
        }
    })
}

// get Product by ID from DB
Product.getProductByID = (id, result) => {
    dbConn.query('SELECT * FROM tim_products WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching products by id', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}




module.exports = Product;