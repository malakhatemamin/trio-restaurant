const mongoose = require('mongoose');

const orderSchema =
mongoose.Schema(

 {

  name:{
   type:String,
   required:true
  },

  phone:{
   type:String,
   required:true
  },

  address:{
   type:String,
   required:true
  },

  payment:{
   type:String,
   required:true
  },

  notes:{
   type:String
  },

  items:[
   {
    name:String,
    price:Number,
    quantity:Number,
    notes:String
   }
  ],

  total:{
   type:Number,
   required:true
  }

 },

 {

  timestamps:true

 }

);

const Order =
mongoose.model(

 'Order',
 orderSchema

);

module.exports = Order;