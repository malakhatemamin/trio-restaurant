const express = require('express');

const router = express.Router();

const Order = require('../models/Order');

/* CREATE ORDER */

router.post('/create',async(req,res)=>{

 try{

  const order = new Order(req.body);

  await order.save();

  res.json({

   message:'Order Saved Successfully'

  });

 }

 catch(err){

  res.status(500).json(err);

 }

});

/* GET ORDERS */

router.get('/',async(req,res)=>{

 const orders = await Order.find();

 res.json(orders);

});

module.exports = router;