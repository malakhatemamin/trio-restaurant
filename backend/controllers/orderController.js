const Order =
require('../models/orderModel');

const createOrder =
async(req,res)=>{

 try{

  const order =
  await Order.create(req.body);

  res.status(201).json(order);

 }catch(error){

  res.status(500).json({

   message:'Order Failed'

  });

 }

};

module.exports = {

 createOrder

};