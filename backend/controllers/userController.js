const User =
require('../models/userModel');

/* REGISTER */

const registerUser =
async(req,res)=>{

 try{

  const {

   name,
   email,
   password

  } = req.body;

  const userExists =
  await User.findOne({email});

  if(userExists){

   return res.status(400).json({

    message:'User Exists'

   });

  }

  const user =
  await User.create({

   name,
   email,
   password

  });

  res.status(201).json({

   _id:user._id,

   name:user.name,

   email:user.email

  });

 }catch(error){

  res.status(500).json({

   message:'Register Failed'

  });

 }

};

/* LOGIN */

const loginUser =
async(req,res)=>{

 try{

  const {

   email,
   password

  } = req.body;

  const user =
  await User.findOne({email});

  if(

   user &&
   user.password === password

  ){

   res.json({

    _id:user._id,

    name:user.name,

    email:user.email

   });

  }else{

   res.status(401).json({

    message:'Invalid Email or Password'

   });

  }

 }catch(error){

  res.status(500).json({

   message:'Login Failed'

  });

 }

};

module.exports = {

 registerUser,
 loginUser

};