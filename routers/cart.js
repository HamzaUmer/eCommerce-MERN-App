const router = require('express').Router();
const Cart = require('../models/Cart');
const CryptoJS= require('crypto-js');
const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");


//CREATE 
router.post("/cart", verifyToken, async(req,res)=> {
    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch(err) {
         res.status(500).json(err);
    }

});

//UPDATE
router.put("/cart/:id", verifyTokenandAuth, async(req,res)=> {
      try {
        const updatedCart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedCart);
      } catch (err) {
        res.status(500).json(err);
      }
 });

//DELETE
router.delete("/cart/:id", verifyTokenandAuth, async(req,res)=> {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart Has been removed!!");

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET
router.get("/cart/find/:userId", verifyTokenandAuth, async(req,res)=> {
    try{
        const cart= await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET All 
router.get("/cart", verifyTokenandAdmin, async(req,res)=> {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch(err) {
        res.status(500).json(err);
    } 
})

module.exports = router;