# 🛒 E-Commerce Product API (Express.js)

## 📌 Project Title

E-Commerce Product REST API using Express.js (In-Memory JSON Database)

---

## 🎯 Objective

Build a REST API using Express.js to manage product data for an e-commerce platform using an in-memory JSON array.

This project demonstrates:

* RESTful API design
* GET, POST and PUT routes
* Dynamic routing
* Server-side filtering & updating
* Proper HTTP status codes
* Deployment on Render

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* CORS
* Postman (API testing)
* Render (Deployment)

---

## 📦 Product Data Structure

Each product contains:

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

---

# 🚀 Implemented Routes

## 🔹 GET Routes

### 1. Get all products

GET `/products`
Returns all products.

### 2. Get product by ID

GET `/products/:id`
Example: `/products/3`

Returns product by ID or 404 if not found.

### 3. Get products by category

GET `/products/category/:categoryName`
Example: `/products/category/Electronics`

Returns filtered products by category.

---

## 🔹 POST Route

### 4. Add new product

POST `/products`

Sample Body:

```json
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
```

Returns created product with status **201**.

---

## 🔹 PUT Routes

### 5. Replace entire product

PUT `/products/:id`
Replaces full product except ID.

### 6. Update stock only

PUT `/products/:id/stock`

Body:

```json
{
  "stock": 60
}
```

### 7. Update price only

PUT `/products/:id/price`

Body:

```json
{
  "price": 1299
}
```

---

# 💻 Run Locally

### Clone repository

```
git clone https://github.com/yourusername/ecommerce-product-api.git
cd ecommerce-product-api
```

### Install dependencies

```
npm install
```

### Run server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# 🌐 Sample API URLs

```
http://localhost:5000/products
http://localhost:5000/products/1
http://localhost:5000/products/category/Electronics
```

---

# ☁ Deployed API (Render)

https://node-js-assignment-2-9jy6.onrender.com

---

# 📬 Postman Documentation

https://documenter.getpostman.com/view/50841281/2sBXcGEzg5
