import { useState } from 'react';

function Offers({addToCart}){

 const [showPopup,setShowPopup] =
 useState(false);

 const offers = [

  {

   id:101,

   title:'Luxury Burger Meal',

   image:
   'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',

   price:199,

   oldPrice:'260 EGP',

   description:
   'Juicy grilled burger with crispy fries and refreshing drink.'

  },

  {

   id:102,

   title:'Italian Pasta Night',

   image:
   'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',

   price:149,

   oldPrice:'220 EGP',

   description:
   'Creamy pasta made with premium cheese and fresh ingredients.'

  },

  {

   id:103,

   title:'Family Pizza Deal',

   image:
   'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',

   price:299,

   oldPrice:'420 EGP',

   description:
   'Large pizza with sides and drinks perfect for family gatherings.'

  }

 ];

 return(

  <div className='container py-5'>

   {/* HEADER */}

   <div className='text-center mb-5'>

    <h1
     className='fw-bold'
     style={{
      fontSize:'60px'
     }}
    >

     Exclusive Offers

    </h1>

    <p
     className='fs-5'
     style={{
      maxWidth:'700px',
      margin:'auto'
     }}
    >

     Enjoy premium meals and luxury
     restaurant offers crafted
     specially for Trio Restaurant
     guests.

    </p>

   </div>

   {/* OFFERS */}

   <div className='row'>

    {

     offers.map((offer)=>{

      return(

       <div
        className='col-md-4 mb-4'
        key={offer.id}
       >

        <div
         className='card h-100'
         style={{

          borderRadius:'28px',

          overflow:'hidden'

         }}
        >

         {/* IMAGE */}

         <div
          style={{
           overflow:'hidden'
          }}
         >

          <img

           src={offer.image}

           alt='offer'

           className='img-fluid'

           style={{

            height:'280px',

            width:'100%',

            objectFit:'cover'

           }}

          />

         </div>

         {/* CONTENT */}

         <div className='p-4'>

          <div
           className='d-flex justify-content-between align-items-center mb-3'
          >

           <span
            className='badge'
            style={{

             background:'#C08B5C',

             padding:'10px 15px',

             fontSize:'14px'

            }}
           >

            LIMITED OFFER

           </span>

           <small
            style={{
             color:'#999'
            }}
           >

            Save Big

           </small>

          </div>

          <h3 className='fw-bold mb-3'>

           {offer.title}

          </h3>

          <p>

           {offer.description}

          </p>

          <div
           className='d-flex align-items-center mt-4'
          >

           <h4
            style={{
             color:'#C08B5C'
            }}
           >

            {offer.price} EGP

           </h4>

           <h6
            className='ms-3'
            style={{

             textDecoration:'line-through',

             color:'#999'

            }}
           >

            {offer.oldPrice}

           </h6>

          </div>

          {/* BUTTON */}

          <button

           className='btn btn-dark w-100 mt-4'

           onClick={()=>{

            addToCart({

             id:offer.id,

             name:offer.title,

             image:offer.image,

             price:offer.price

            });

            setShowPopup(true);

            setTimeout(()=>{

             setShowPopup(false);

            },2500);

           }}

          >

           Add To Cart

          </button>

         </div>

        </div>

       </div>

      )

     })

    }

   </div>

   {/* POPUP */}

   {

    showPopup &&

    <div

     style={{

      position:'fixed',

      top:'30px',

      right:'30px',

      background:'#fff',

      padding:'20px 30px',

      borderRadius:'20px',

      boxShadow:'0 10px 30px rgba(0,0,0,0.15)',

      zIndex:'9999',

      display:'flex',

      alignItems:'center',

      gap:'15px',

      minWidth:'350px'

     }}

    >

     {/* ICON */}

     <div

      style={{

       width:'60px',

       height:'60px',

       borderRadius:'50%',

       background:'#C08B5C',

       display:'flex',

       justifyContent:'center',

       alignItems:'center',

       color:'white',

       fontSize:'30px'

      }}

     >

      ✓

     </div>

     {/* TEXT */}

     <div>

      <h4
       style={{
        margin:'0',
        fontWeight:'700'
       }}
      >

       Added To Cart

      </h4>

      <p
       style={{
        margin:'0',
        color:'#777'
       }}
      >

       Your delicious item was added.

      </p>

     </div>

    </div>

   }

  </div>

 )

}

export default Offers;