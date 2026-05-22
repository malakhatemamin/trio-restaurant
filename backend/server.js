const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

/* ROUTES */

const userRoutes =
require('./routes/userRoutes');

const messageRoutes =
require('./routes/messageRoutes');

const reservationRoutes =
require('./routes/reservationRoutes');

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* MONGODB CONNECTION */

mongoose.connect(

 'mongodb+srv://malakhatem2554_db_user:malak123@cluster0.mongodb.net/trio?retryWrites=true&w=majority'

)

.then(()=>{

 console.log('MongoDB Connected');

})

.catch((error)=>{

 console.log(error);

});

/* ROUTES */

app.use(

 '/api/users',
 userRoutes

);

app.use(

 '/api/messages',
 messageRoutes

);

app.use(

 '/api/reservations',
 reservationRoutes

);

/* TEST ROUTE */

app.get('/',(req,res)=>{

 res.send('API Running');

});

/* PORT */

const PORT = 5000;

app.listen(PORT,()=>{

 console.log(

  `Server Started On Port ${PORT}`

 );

});