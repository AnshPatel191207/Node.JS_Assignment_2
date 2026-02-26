const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];

app.get("/", (req, res) => {
  res.send("E-Commerce Product API Running 🚀");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      foundProduct = products[i];
      break;
    }
  }

  if (!foundProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(foundProduct);
});

app.get("/products/category/:categoryName", (req, res) => {
  const category = req.params.categoryName.toLowerCase();
  let filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category.toLowerCase() === category) {
      filteredProducts.push(products[i]);
    }
  }

  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  const { name, category, price, stock, rating } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock,
    rating
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      const { name, category, price, stock, rating } = req.body;

      products[i] = {
        id: id,
        name,
        category,
        price,
        stock,
        rating
      };

      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    return res.status(404).json({ message: "Product not found" });
  }
});

app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].stock = req.body.stock;
      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    return res.status(404).json({ message: "Product not found" });
  }
});

app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].price = req.body.price;
      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    return res.status(404).json({ message: "Product not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});