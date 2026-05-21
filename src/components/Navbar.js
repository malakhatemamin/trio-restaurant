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

       width:'240px',

       objectFit:'contain'

      }}

     />

    </Link>

    {/* MOBILE BUTTON */}

    <button

     className='navbar-toggler'

     type='button'

     data-bs-toggle='collapse'

     data-bs-target='#navbarNav'

     aria-controls='navbarNav'

     aria-expanded='false'

     aria-label='Toggle navigation'

     style={{

      border:'1px solid #E5D3B3',

      background:'#314131'

     }}

    >

     <span

      className='navbar-toggler-icon'

      style={{

       filter:'invert(1)'

      }}

     >

     </span>

    </button>

    {/* NAVBAR */}

    <div
     className='collapse navbar-collapse'
     id='navbarNav'
    >

     {/* LINKS */}

     <ul className='navbar-nav mx-auto align-items-center'>

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
        to='/reservation'
        className='nav-link'
       >

        Reservation

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

     {/* RIGHT SIDE */}

     <div className='d-flex align-items-center gap-3 mobile-user-section'>

      {

       userInfo ?

       <>

        {/* HELLO */}

        <span

         style={{

          color:'#E5D3B3',

          fontWeight:'700',

          fontSize:'16px'

         }}

        >

         Hello,
         {' '}
         {userInfo?.name}

        </span>

        {/* LOGOUT */}

        <button

         className='btn btn-dark'

         onClick={logoutHandler}

        >

         Logout

        </button>

       </>

       :

       <>

        {/* LOGIN */}

        <Link
         to='/login'
         className='nav-link'
        >

         Login

        </Link>

        {/* SIGNUP */}

        <Link
         to='/Register'
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