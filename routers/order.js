const router = require('express').Router();
const Order = require('../models/Order');
const CryptoJS= require('crypto-js');
const { verifyToken, verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");


//CREATE 
router.post("/order", verifyToken, async(req,res)=> {
    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch(err) {
         res.status(500).json(err);
    }

});

//UPDATE
router.put("/order/:id", verifyTokenandAdmin, async(req,res)=> {
      try {
        const updatedOrder = await Order.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
 });

//DELETE
router.delete("/order/:id", verifyTokenandAdmin, async(req,res)=> {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Has been removed!!");

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET
router.get("/order/find/:userId", verifyTokenandAuth, async(req,res)=> {
    try{
        const orders= await Order.find({userId: req.params.userId});
        res.status(200).json(orders);

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET All 
router.get("/order", verifyTokenandAdmin, async(req,res)=> {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch(err) {
        res.status(500).json(err);
    } 
});

//Get Monthly Income
router.get("/order/income", verifyTokenandAdmin, async (req,res)=> {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
        const income = await Order.aggregate([
            { $match: { createdAt: {$gte: previousMonth}}},
            {
                $project : {
                    month : { $month: "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id : "$month",
                    total: { $sum: "$sales"},
                },
            },
        ]);
      res.status(200).json(income);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;