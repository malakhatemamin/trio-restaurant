import {

 FaInstagram,
 FaFacebookF,
 FaTiktok,
 FaPhoneAlt,
 FaEnvelope,
 FaMapMarkerAlt

} from 'react-icons/fa';

function Footer(){

 return(

  <footer>

   <div className='container'>

    <div className='row text-center text-md-start'>

     {/* LEFT */}

     <div className='col-md-4 mb-5'>

      <h3>

       Trio Restaurant

      </h3>

      <p className='mt-4'>

       Luxury Italian dining
       experience with authentic
       flavors, handcrafted meals,
       and elegant atmosphere.

      </p>

      {/* SOCIAL */}

      <div className='d-flex gap-3 mt-4 justify-content-center justify-content-md-start'>

       {/* INSTAGRAM */}

       <a

        href='https://instagram.com'

        target='_blank'

        rel='noreferrer'

        className='btn btn-dark'

       >

        <FaInstagram />

       </a>

       {/* FACEBOOK */}

       <a

        href='https://facebook.com'

        target='_blank'

        rel='noreferrer'

        className='btn btn-dark'

       >

        <FaFacebookF />

       </a>

       {/* TIKTOK */}

       <a

        href='https://tiktok.com'

        target='_blank'

        rel='noreferrer'

        className='btn btn-dark'

       >

        <FaTiktok />

       </a>

      </div>

     </div>

     {/* CENTER */}

     <div className='col-md-4 mb-5'>

      <h4>

       Contact Information

      </h4>

      <div className='mt-4'>

       <p>

        <FaMapMarkerAlt />
        {' '}
        Cairo, Egypt

       </p>

       <p>

        <FaPhoneAlt />
        {' '}
        +20 123 456 789

       </p>

       <p>

        <FaEnvelope />
        {' '}
        trio@gmail.com

       </p>

      </div>

     </div>

     {/* RIGHT */}

     <div className='col-md-4 mb-5'>

      <h4>

       Opening Hours

      </h4>

      <div className='mt-4'>

       <p>

        Monday - Friday

       </p>

       <p>

        10:00 AM - 11:00 PM

       </p>

       <p className='mt-4'>

        Saturday - Sunday

       </p>

       <p>

        12:00 PM - 1:00 AM

       </p>

      </div>

     </div>

    </div>

    {/* LINE */}

    <hr style={{borderColor:'#556B4D'}} />

    {/* COPYRIGHT */}

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