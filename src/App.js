import './App.css';

import {

 BrowserRouter,
 Routes,
 Route

} from 'react-router-dom';

/* COMPONENTS */

import Navbar from './components/Navbar';

import Footer from './components/Footer';

/* PAGES */

import Home from './pages/Home';

import Menu from './pages/Menu';

import Cart from './pages/Cart';

import Checkout from './pages/Checkout';

import Contact from './pages/Contact';

import About from './pages/About';

import Offers from './pages/Offers';

import Login from './pages/Login';

import Signup from './pages/Register';

import Reservation from './pages/Reservation';

function App(){

 return(

  <BrowserRouter>

   {/* NAVBAR */}

   <Navbar />

   {/* ROUTES */}

   <Routes>

    {/* HOME */}

    <Route

     path='/'

     element={<Home />}

    />

    {/* MENU */}

    <Route

     path='/menu'

     element={<Menu />}

    />

    {/* CART */}

    <Route

     path='/cart'

     element={<Cart />}

    />

    {/* CHECKOUT */}

    <Route

     path='/checkout'

     element={<Checkout />}

    />

    {/* CONTACT */}

    <Route

     path='/contact'

     element={<Contact />}

    />

    {/* ABOUT */}

    <Route

     path='/about'

     element={<About />}

    />

    {/* OFFERS */}

    <Route

     path='/offers'

     element={<Offers />}

    />

    {/* LOGIN */}

    <Route

     path='/login'

     element={<Login />}

    />

    {/* SIGNUP */}

    <Route

     path='/Register'

     element={<Signup />}

    />

    {/* RESERVATION */}

    <Route

     path='/reservation'

     element={<Reservation />}

    />

   </Routes>

   {/* FOOTER */}

   <Footer />

  </BrowserRouter>

 )

}

export default App;