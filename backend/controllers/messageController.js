const Message =
require('../models/messageModel');

const saveMessage = async(req,res)=>{

 try{

  const {

   name,
   email,
   message

  } = req.body;

  const newMessage =
  await Message.create({

   name,
   email,
   message

  });

  res.status(201).json(newMessage);

 }catch(error){

  res.status(500).json({

   message:'Failed To Save Message'

  });

 }

};

module.exports = {

 saveMessage

};