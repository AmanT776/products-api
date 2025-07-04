# Products API
A RESTful API for managing products, built with Express.js, Mongoose, and MongoDB. This API allows you to perform full CRUD operations (Create, Read, Update, Delete) on a product resource.

## Features
Create a new product

Get all products

Get a single product by ID

Update a product by ID

Delete a product by ID

🛠️ Technologies Used
Express.js – Fast, unopinionated web framework for Node.js

Mongoose – MongoDB object modeling for Node.js

MongoDB – NoSQL database

## Project Structure

products-api/
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoutes.js
├── .env
├── app.js
├── server.js
└── README.md
## Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/products-api.git
cd products-api
2. Install Dependencies
bash
Copy
Edit
npm install
4. Run the Server
npm start   
## API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product by ID
DELETE	/api/products/:id	Delete a product by ID

