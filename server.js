const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/products.route.js');
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/")
    .then(console.log('connected to the database'))
        .catch((e)=>{console.log(e.message)})
app.use('/api/products',productRoute);










app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})