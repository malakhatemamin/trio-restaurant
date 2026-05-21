import { useState,useEffect } from 'react';

import {

 BrowserRouter,
 Routes,
 Route

}

from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

import Menu from './pages/Menu';

import Cart from './pages/Cart';

import Checkout from './pages/Checkout';

import Login from './pages/Login';

import Register from './pages/Register';

import Dashboard from './pages/Dashboard';

import About from './pages/About';

import Contact from './pages/Contact';

import Offers from './pages/Offers';

import './App.css';

function App(){

 /* USER */

 const [user,setUser] =
 useState(

  JSON.parse(
   localStorage.getItem('user')
  )

  || null

 );

 /* CART */

 const [cart,setCart] =
 useState(

  JSON.parse(
   localStorage.getItem('cart')
  )

  || []

 );

 /* SAVE CART */

 useEffect(()=>{

  localStorage.setItem(

   'cart',

   JSON.stringify(cart)

  );

 },[cart]);

 /* SAVE USER */

 useEffect(()=>{

  localStorage.setItem(

   'user',

   JSON.stringify(user)

  );

 },[user]);

 /* ADD TO CART */

 function addToCart(food){

  const exist = cart.find(

   (item)=> item.id === food.id

  );

  if(exist){

   setCart(

    cart.map((item)=>

     item.id === food.id

     ?

     {

      ...item,

      quantity:item.quantity + 1

     }

     :

     item

    )

   );

  }

  else{

   setCart([

    ...cart,

    {

     ...food,

     quantity:1

    }

   ]);

  }

 }

 /* REMOVE */

 function removeFromCart(id){

  const exist = cart.find(

   (item)=> item.id === id

  );

  if(exist.quantity === 1){

   setCart(

    cart.filter(

     (item)=> item.id !== id

    )

   );

  }

  else{

   setCart(

    cart.map((item)=>

     item.id === id

     ?

     {

      ...item,

      quantity:item.quantity - 1

     }

     :

     item

    )

   );

  }

 }

 return(

  <BrowserRouter>

   <Navbar user={user} />

   <Routes>

    <Route
     path='/'
     element={<Home />}
    />

    <Route
     path='/menu'
     element={
      <Menu addToCart={addToCart} />
     }
    />

    <Route
     path='/cart'
     element={

      <Cart

       cart={cart}

       addToCart={addToCart}

       removeFromCart={removeFromCart}

      />

     }
    />

    <Route
     path='/checkout'
     element={<Checkout cart={cart} />}
    />

    <Route
     path='/login'
     element={<Login setUser={setUser} />}
    />

    <Route
     path='/register'
     element={<Register />}
    />

    <Route
     path='/dashboard'
     element={<Dashboard />}
    />

    <Route
     path='/about'
     element={<About />}
    />

    <Route
     path='/contact'
     element={<Contact />}
    />

    <Route
     path='/offers'
     element={  <Offers addToCart={addToCart} />}
    />

   </Routes>

  </BrowserRouter>

 )

}

export default App;