const db = require('./db');

function getAllUsers() {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        console.log('All Users:', results);
    });
}

function getAllProducts() {
   db.query('SELECT * FROM products', (err, results) => {
        if (err) throw err;
        console.log('All Products:', results);
    });
}

function deleteProduct() {
    db.query("DELETE FROM products WHERE product_code = 'baro1'", (err, result) => {
        if (err) throw err;
        console.log('Deleted product: baro1');
    });
}

function insertNewProduct() {
    const query = ("INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)");
    const values = ['rips', 'Pork Ribs', 100.00, 15];
    db.query(query, values, (err, result) => {
        if (err) throw err;
        console.log('Inserted new product: Pork Ribs');
    });
}

function updateProduct() {
    const query = "UPDATE products SET product_price = ?  WHERE product_name = ?";
    const values = [25.99, 'Handy Andy'];
    db.query(query, values, (err, result) => {
        if (err) throw err;
        console.log('Updated product: Handy Andy');
    });
}
getAllUsers();
getAllProducts();
// deleteProduct();
// insertNewProduct();
// updateProduct();
