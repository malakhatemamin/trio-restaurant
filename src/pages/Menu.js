import { useState } from 'react';

function Menu({addToCart}){

 const [showPopup,setShowPopup] =
 useState(false);

 const foods = [

  {

   id:1,

   name:'Margherita Pizza',

   price:220,

   image:
   'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',

   category:'Pizza'

  },

  {

   id:2,

   name:' Red  Pasta',

   price:180,

   image:
   'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',

   category:'Pasta'

  },

  {

   id:3,

   name:'Luxury Beef Burger',

   price:199,

   image:
   'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',

   category:'Burger'

  },

  {

   id:4,

   name:'Italian Lasagna',

   price:240,

   image:
   'https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1200&auto=format&fit=crop',

   category:'Pasta'

  },

  {

   id:5,

   name:'Caesar Salad',

   price:130,

   image:
   'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop',

   category:'Salad'

  },

  {

   id:6,

   name:'Seafood Pizza',

   price:280,

   image:
   'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop',

   category:'Pizza'

  },

  {

   id:7,

   name:'Truffle Mushroom Pasta',

   price:260,

   image:
   'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop',

   category:'Pasta'

  },

  {

   id:8,

   name:'Grilled  Steak',

   price:320,

   image:
   'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop',

   category:'Steak'

  }

 ];

 return(

  <div className='container py-5'>

   {/* HEADER */}

   <div className='text-center mb-5'>

    <span
     style={{

      color:'#7C8F58',

      letterSpacing:'2px',

      fontWeight:'600'

     }}
    >

     OUR MENU

    </span>

    <h1
     className='fw-bold my-3'
     style={{
      fontSize:'65px'
     }}
    >

     Italian Luxury Dining

    </h1>

    <p
     className='fs-5'
     style={{
      maxWidth:'750px',
      margin:'auto'
     }}
    >

     Explore handcrafted Italian
     dishes prepared with fresh
     ingredients and authentic
     flavors inspired by the heart
     of Italy.

    </p>

   </div>

   {/* MENU ITEMS */}

   <div className='row'>

    {

     foods.map((food)=>{

      return(

       <div
        className='col-md-3 mb-4'
        key={food.id}
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

           src={food.image}

           alt='food'

           className='img-fluid'

           style={{

            height:'260px',

            width:'100%',

            objectFit:'cover'

           }}

          />

         </div>

         {/* CONTENT */}

         <div className='p-4'>

          <span
           className='badge mb-3'
           style={{

            background:'#D8C3A5',

            color:'#3E4B3C',

            padding:'8px 14px',

            fontSize:'13px'

           }}
          >

           {food.category}

          </span>

          <h4 className='fw-bold'>

           {food.name}

          </h4>

          <div
           className='d-flex justify-content-between align-items-center mt-4'
          >

           <h5
            style={{
             color:'#556B2F'
            }}
           >

            {food.price} EGP

           </h5>

           <button

            className='btn btn-dark'

            onClick={()=>{

             addToCart(food);

             setShowPopup(true);

             setTimeout(()=>{

              setShowPopup(false);

             },2500);

            }}

           >

            Add

           </button>

          </div>

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

       background:'#7C8F58',

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

export default Menu;