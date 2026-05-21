import { Link } from 'react-router-dom';

import logo from '../assets/ChatGPT Image May 20, 2026, 02_04_33 PM.png';

function Navbar(){

 const userInfo = JSON.parse(

  localStorage.getItem('userInfo')

 );

 const logoutHandler = ()=>{

  localStorage.removeItem('userInfo');

  window.location.href='/';

 };

 return(

  <nav className='navbar navbar-expand-lg'>

   <div className='container'>

    {/* LOGO */}

    <Link
     className='navbar-brand'
     to='/'
    >

     <img

      src={logo}

      alt='logo'

      style={{

       width:'230px'

      }}

     />

    </Link>

    {/* MOBILE BUTTON */}

    <button

     className='navbar-toggler'

     type='button'

     data-bs-toggle='collapse'

     data-bs-target='#navbarNav'

     style={{

      background:'#E5D3B3'

     }}

    >

     <span className='navbar-toggler-icon'></span>

    </button>

    {/* NAVBAR */}

    <div
     className='collapse navbar-collapse'
     id='navbarNav'
    >

     {/* LINKS */}

     <ul className='navbar-nav mx-auto'>

      <li className='nav-item'>

       <Link
        to='/'
        className='nav-link'
       >

        Home

       </Link>

      </li>

      <li className='nav-item'>

       <Link
        to='/menu'
        className='nav-link'
       >

        Menu

       </Link>

      </li>

      <li className='nav-item'>

       <Link
        to='/cart'
        className='nav-link'
       >

        Cart

       </Link>

      </li>

      <li className='nav-item'>

       <Link
        to='/offers'
        className='nav-link'
       >

        Offers

       </Link>

      </li>

      <li className='nav-item'>

       <Link
        to='/about'
        className='nav-link'
       >

        About

       </Link>

      </li>

      <li className='nav-item'>

       <Link
        to='/contact'
        className='nav-link'
       >

        Contact

       </Link>

      </li>

     </ul>

     {/* RIGHT */}

     <div className='d-flex align-items-center gap-3'>

      {

       userInfo ?

       <>

        <span

         style={{

          color:'#E5D3B3',

          fontWeight:'700'

         }}

        >

         Hello,
         {' '}
         {userInfo?.name}

        </span>

        <button

         className='btn btn-dark'

         onClick={logoutHandler}

        >

         Logout

        </button>

       </>

       :

       <>

        <Link
         to='/login'
         className='nav-link'
        >

         Login

        </Link>

        <Link
         to='/signup'
         className='nav-link'
        >

         Sign Up

        </Link>

       </>

      }

     </div>

    </div>

   </div>

  </nav>

 )

}

export default Navbar;