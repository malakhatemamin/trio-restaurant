import { Link } from 'react-router-dom';

function About(){

 return(

  <div className='container py-5'>

   {/* HEADER */}

   <div className='text-center mb-5'>

    <span
     style={{

      color:'#E5D3B3',

      letterSpacing:'2px',

      fontWeight:'600'

     }}
    >

     ABOUT US

    </span>

    <h1
     className='fw-bold my-3'
     style={{
      fontSize:'65px'
     }}
    >

     Our Story

    </h1>

    <p
     className='fs-5'
     style={{
      maxWidth:'800px',
      margin:'auto'
     }}
    >

     Trio Restaurant was created
     from friendship,
     passion,
     and love for authentic
     Italian cuisine.

    </p>

   </div>

   {/* STORY SECTION */}

   <div className='row align-items-center mb-5'>

    {/* IMAGE */}

    <div className='col-md-6 mb-4'>

     <img

      src='https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop'

      alt='restaurant'

      className='img-fluid shadow'

      style={{

       width:'100%',

       height:'550px',

       objectFit:'cover',

       borderRadius:'35px'

      }}

     />

    </div>

    {/* TEXT */}

    <div className='col-md-6 p-4'>

     <h2
      className='fw-bold mb-4'
      style={{
       fontSize:'50px'
      }}
     >

      Three Friends,
      <br />
      One Dream

     </h2>

     <p
      className='fs-5'
      style={{
       lineHeight:'2'
      }}
     >

      Trio Restaurant began with
      three close friends who
      shared a dream of bringing
      authentic Italian flavors to
      Cairo in a modern and luxury
      atmosphere.

     </p>

     <p
      className='fs-5'
      style={{
       lineHeight:'2'
      }}
     >

      Inspired by the warmth of
      Italy,
      they created a restaurant
      where food,
      friendship,
      and unforgettable moments
      come together.

     </p>

     <p
      className='fs-5'
      style={{
       lineHeight:'2'
      }}
     >

      Every dish is prepared with
      passion,
      premium ingredients,
      and attention to every detail
      to give guests a truly special
      dining experience.

     </p>

    </div>

   </div>

   {/* FEATURES */}

   <div className='row text-center mt-5'>

    {/* CARD 1 */}

    <div className='col-md-4 mb-4'>

     <div className='card p-5 h-100'>

      <h1
       style={{
        fontSize:'60px'
       }}
      >

       🍝

      </h1>

      <h3 className='fw-bold my-3'>

       Authentic Recipes

      </h3>

      <p>

       Traditional Italian recipes
       prepared with fresh premium
       ingredients.

      </p>

     </div>

    </div>

    {/* CARD 2 */}

    <div className='col-md-4 mb-4'>

     <div className='card p-5 h-100'>

      <h1
       style={{
        fontSize:'60px'
       }}
      >

       🍷

      </h1>

      <h3 className='fw-bold my-3'>

       Elegant Atmosphere

      </h3>

      <p>

       A warm luxury environment
       perfect for family,
       friends,
       and romantic dinners.

      </p>

     </div>

    </div>

    {/* CARD 3 */}

    <div className='col-md-4 mb-4'>

     <div className='card p-5 h-100'>

      <h1
       style={{
        fontSize:'60px'
       }}
      >

       ⭐

      </h1>

      <h3 className='fw-bold my-3'>

       Premium Experience

      </h3>

      <p>

       Exceptional service and
       unforgettable dining moments
       for every guest.

      </p>

     </div>

    </div>

   </div>

   {/* BUTTON AT BOTTOM */}

   <div className='text-center mt-5'>

    <Link
     to='/menu'
     className='btn btn-dark btn-lg'
    >

     Discover Our Menu

    </Link>

   </div>

  </div>

 )

}

export default About;