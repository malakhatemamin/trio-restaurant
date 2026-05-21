function Footer(){

 return(

  <footer>

   <div className='container'>

    <div className='row text-center text-md-start'>

     {/* LEFT */}

     <div className='col-md-4 mb-4'>

      <h3>

       Trio Restaurant

      </h3>

      <p className='mt-3'>

       Luxury Italian dining
       experience with authentic
       flavors and elegant atmosphere.

      </p>

     </div>

     {/* CENTER */}

     <div className='col-md-4 mb-4'>

      <h4>

       Contact

      </h4>

      <p className='mt-3'>

       📍 Cairo, Egypt

      </p>

      <p>

       📞 +20 123 456 789

      </p>

      <p>

       ✉️ trio@gmail.com

      </p>

     </div>

     {/* RIGHT */}

     <div className='col-md-4 mb-4'>

      <h4>

       Opening Hours

      </h4>

      <p className='mt-3'>

       Monday - Friday

      </p>

      <p>

       10:00 AM - 11:00 PM

      </p>

      <p>

       Saturday - Sunday

      </p>

      <p>

       12:00 PM - 1:00 AM

      </p>

     </div>

    </div>

    {/* BOTTOM */}

    <hr style={{borderColor:'#556B4D'}} />

    <div className='text-center pt-3'>

     <p>

      © 2026 Trio Restaurant.
      All Rights Reserved.

     </p>

    </div>

   </div>

  </footer>

 )

}

export default Footer;