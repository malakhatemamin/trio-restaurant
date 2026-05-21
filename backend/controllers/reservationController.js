const Reservation =
require('../models/reservationModel');

const createReservation =
async(req,res)=>{

 try{

  const {

   name,
   phone,
   guests,
   date,
   time

  } = req.body;

  const reservation =
  await Reservation.create({

   name,
   phone,
   guests,
   date,
   time

  });

  res.status(201).json(reservation);

 }catch(error){

  res.status(500).json({

   message:'Reservation Failed'

  });

 }

};

module.exports = {

 createReservation

};