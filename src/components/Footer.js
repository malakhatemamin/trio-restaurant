function Footer(){

 return(

  <footer className='bg-dark text-white mt-5 p-5'>

   <div className='container'>

    <div className='row'>

     {/* Restaurant Info */}

     <div className='col-md-4 mb-4'>

      <h3>Restaurant</h3>

      <p>

       Delicious meals with high quality
       ingredients and fast delivery.

      </p>

     </div>

     {/* Quick Links */}

     <div className='col-md-4 mb-4'>

      <h3>Quick Links</h3>

      <p>Home</p>
      <p>Menu</p>
      <p>Offers</p>
      <p>Contact</p>

     </div>

     {/* Contact Info */}

     <div className='col-md-4 mb-4'>

      <h3>Contact Us</h3>

      <p>Email: restaurant@gmail.com</p>

      <p>Phone: +20 123456789</p>

      <p>Alexandria, Egypt</p>

     </div>

    </div>

    <hr />

    <div className='text-center'>

     <p>

      © 2026 Restaurant Ordering System

     </p>

    </div>

   </div>

  </footer>

 )

}

export default Footer;