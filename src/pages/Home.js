import { Link } from 'react-router-dom';

function Home(){

 return(

  <div>

   {/* HERO SECTION */}

   <div className='hero'>

    <div className='container text-center'>

     <span

      style={{

       letterSpacing:'3px',

       color:'#D8C3A5',

       fontWeight:'600'

      }}

     >

      TRIO RESTAURANT

     </span>

     <h1
      className='fw-bold my-4'
     >

      Taste The Heart
      <br />
      Of Italy

     </h1>

     <p
      className='fs-5 mb-5'
      style={{
       maxWidth:'750px',
       margin:'auto'
      }}
     >

      Experience handcrafted Italian
      dishes,
      elegant dining,
      and unforgettable moments
      prepared with passion and
      fresh ingredients.

     </p>

     <div
      className='d-flex justify-content-center gap-3 flex-wrap'
     >

      <Link
       to='/menu'
       className='btn btn-dark btn-lg'
      >

       Explore Menu

      </Link>

      <Link
       to='/offers'
       className='btn btn-danger btn-lg'
      >

       View Offers

      </Link>

     </div>

    </div>

   </div>

   {/* FEATURES */}

   <div className='container py-5'>

    <div className='row text-center'>

     {/* CARD 1 */}

     <div className='col-md-4 mb-4'>

      <div className='card p-5 h-100'>

       <img

        src='https://cdn-icons-png.flaticon.com/512/3075/3075977.png'

        alt='italian food'

        style={{

         width:'85px',

         height:'85px',

         objectFit:'contain',

         margin:'auto'

        }}

       />

       <h3 className='fw-bold my-4'>

        Authentic Italian Food

       </h3>

       <p>

        Fresh ingredients and rich
        Italian flavors crafted by
        passionate chefs.

       </p>

      </div>

     </div>

     {/* CARD 2 */}

     <div className='col-md-4 mb-4'>

      <div className='card p-5 h-100'>

       <img

        src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'

        alt='luxury dining'

        style={{

         width:'85px',

         height:'85px',

         objectFit:'contain',

         margin:'auto'

        }}

       />

       <h3 className='fw-bold my-4'>

        Luxury Dining Experience

       </h3>

       <p>

        Elegant atmosphere perfect
        for family dinners,
        dates,
        and unforgettable evenings.

       </p>

      </div>

     </div>

     {/* CARD 3 */}

     <div className='col-md-4 mb-4'>

      <div className='card p-5 h-100'>

       <img

        src='https://cdn-icons-png.flaticon.com/512/2515/2515183.png'

        alt='fresh meals'

        style={{

         width:'85px',

         height:'85px',

         objectFit:'contain',

         margin:'auto'

        }}

       />

       <h3 className='fw-bold my-4'>

        Fresh Daily Meals

       </h3>

       <p>

        Premium meals served fresh
        every day with authentic
        Italian quality.

       </p>

      </div>

     </div>

    </div>

   </div>

   {/* WHY CHOOSE US */}

   <div className='container py-5'>

    <div className='row align-items-center'>

     {/* TEXT */}

     <div className='col-md-6 p-4'>

      <span
       style={{

        color:'#7C8F58',

        letterSpacing:'2px',

        fontWeight:'600'

       }}
      >

       WHY CHOOSE US

      </span>

      <h2
       className='fw-bold my-4'
       style={{
        fontSize:'55px'
       }}
      >

       Crafted With Love
       And Tradition

      </h2>

      <p
       className='fs-5'
       style={{
        lineHeight:'2'
       }}
      >

       Trio Restaurant combines
       modern elegance with classic
       Italian recipes to create a
       luxurious dining experience.

      </p>

      <p
       className='fs-5'
       style={{
        lineHeight:'2'
       }}
      >

       Every dish is carefully
       prepared to bring warmth,
       flavor,
       and unforgettable memories to
       every table.

      </p>

      <Link
       to='/about'
       className='btn btn-dark mt-4'
      >

       Learn More

      </Link>

     </div>

     {/* IMAGE */}

     <div className='col-md-6 mb-4'>

      <img

       src='https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop'

       alt='restaurant'

       className='img-fluid shadow'

       style={{

        borderRadius:'30px',

        height:'550px',

        width:'100%',

        objectFit:'cover'

       }}

      />

     </div>

    </div>

   </div>

   {/* GALLERY */}

   <div className='container py-5'>

    <div className='text-center mb-5'>

     <span
      style={{

       color:'#7C8F58',

       letterSpacing:'2px',

       fontWeight:'600'

      }}
     >

      GALLERY

     </span>

     <h2
      className='fw-bold mt-3'
      style={{
       fontSize:'55px'
      }}
     >

      Our Signature Dishes

     </h2>

    </div>

    <div className='row'>

     <div className='col-md-4 mb-4'>

      <img

       src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop'

       alt='pizza'

       className='img-fluid shadow'

       style={{

        height:'320px',

        width:'100%',

        objectFit:'cover',

        borderRadius:'25px'

       }}

      />

     </div>

     <div className='col-md-4 mb-4'>

      <img

       src='https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop'

       alt='pasta'

       className='img-fluid shadow'

       style={{

        height:'320px',

        width:'100%',

        objectFit:'cover',

        borderRadius:'25px'

       }}

      />

     </div>

     <div className='col-md-4 mb-4'>

      <img

       src='https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop'

       alt='steak'

       className='img-fluid shadow'

       style={{

        height:'320px',

        width:'100%',

        objectFit:'cover',

        borderRadius:'25px'

       }}

      />

     </div>

    </div>

   </div>

  </div>

 )

}

export default Home;