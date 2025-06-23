const Product = require('../models/product.model.js')

const getProducts = async (req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

const getProduct = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

const addProduct = async (req,res)=>{
     try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateProduct = async(req,res)=>{
      try{
            const {id} = req.params
            const product = await Product.findByIdAndUpdate(id,req.body)
            if(!product){
                res.status(404).json({message: "product not found"})
            }
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct);
        }catch(e){
            res.status(500).json({message: e.message})
        }
}

const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message: "product not found"})
        }
        res.status(200).json({message: 'product deleted succesffully'})
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}