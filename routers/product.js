const router = require('express').Router();
const Product = require('../models/Product');
const CryptoJS= require('crypto-js');
const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");


//CREATE 
router.post("/products", verifyTokenandAdmin, async(req,res)=> {
    const newProduct = new Product(req.body);

    try{
        const savedProducts = await newProduct.save();
        res.status(200).json(savedProducts);

    } catch(err) {
         res.status(500).json(err);
    }

});

//UPDATE
router.put("/products/:id", verifyTokenandAdmin, async(req,res)=> {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
 });

//DELETE
router.delete("/products/:id", verifyTokenandAdmin, async(req,res)=> {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product Has been removed!!");

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET
router.get("/products/find/:id", async(req,res)=> {
    try{
        const product= await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET All Products
router.get("/products", async(req,res)=> {
    const queryNew = req.query.new;
    const queryCategories = req.query.category;
    try{
        let products;
        if(queryNew) {
            products = await Product.find().sort({ createdAt: -1}).limit(5);
        } else if(queryCategories){
            products = await Product.find({
                categories : {
                    $in : [queryCategories],
                },
            });
        } 
        else {
            products = await Product.find();
        }
        res.status(200).json(products);

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;