import { useState } from 'react';

function Offers(){

 /* SEARCH */

 const [search,setSearch] =
 useState('');

 /* CATEGORY */

 const [category,setCategory] =
 useState('All');

 /* POPUP */

 const [popup,setPopup] =
 useState('');

 /* ADD TO CART */

 const addToCart = (offer)=>{

  let cart = JSON.parse(

   localStorage.getItem('cart')

  ) || [];

  cart.push({

   name:offer.name,

   price:offer.newPrice

  });

  localStorage.setItem(

   'cart',

   JSON.stringify(cart)

  );

  setPopup(`${offer.name} Added To Cart`);

  setTimeout(()=>{

   setPopup('');

  },2000);

 };

 /* OFFERS */

 const offers = [

  {

   name:'Pizza Combo',

   category:'Pizza',

   oldPrice:30,

   newPrice:20,

   discount:'30% OFF',

   image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',

   description:'2 large pizzas + drinks.'

  },

  {

   name:'Pasta Night',

   category:'Pasta',

   oldPrice:25,

   newPrice:18,

   discount:'25% OFF',

   image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',

   description:'Creamy pasta special offer.'

  },

  {

   name:'Family Dinner',

   category:'Family',

   oldPrice:70,

   newPrice:50,

   discount:'20% OFF',

   image:'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',

   description:'Luxury family dinner for 4.'

  },

  {

   name:'Dessert Deal',

   category:'Desserts',

   oldPrice:18,

   newPrice:10,

   discount:'45% OFF',

   image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop',

   description:'Cheesecake + Tiramisu combo.'

  },

  {

   name:'Seafood Special',

   category:'Seafood',

   oldPrice:45,

   newPrice:35,

   discount:'22% OFF',

   image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop',

   description:'Fresh salmon and shrimp special.'

  },

  {

   name:'Lunch Offer',

   category:'Lunch',

   oldPrice:22,

   newPrice:15,

   discount:'32% OFF',

   image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',

   description:'Lunch meal with drink included.'

  }

 ];

 /* FILTER */

 const filteredOffers = offers.filter((offer)=>{

  return(

   (category === 'All' ||

    offer.category === category)

   &&

   offer.name.toLowerCase().includes(

    search.toLowerCase()

   )

  );

 });

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

     SPECIAL OFFERS

    </span>

    <h1

     className='fw-bold mt-3'

     style={{

      fontSize:'55px'

     }}

    >

     Exclusive Deals

    </h1>

    <p className='mt-3 fs-5'>

     Enjoy luxury Italian meals
     with exclusive discounts
     and limited-time offers.

    </p>

   </div>

   {/* SEARCH */}

   <div className='row mb-5 justify-content-center'>

    <div className='col-lg-5'>

     <input

      type='text'

      className='form-control'

      placeholder='Search offers...'

      value={search}

      onChange={(e)=>{

       setSearch(e.target.value);

      }}

     />

    </div>

   </div>

   {/* CATEGORIES */}

   <div className='d-flex flex-wrap justify-content-center gap-3 mb-5'>

    {

     [

      'All',
      'Pizza',
      'Pasta',
      'Family',
      'Desserts',
      'Seafood',
      'Lunch'

     ].map((cat,index)=>(

      <button

       key={index}

       className={`btn ${
        category === cat
        ?
        'btn-dark'
        :
        'btn-outline-dark'
       }`}

       onClick={()=>{

        setCategory(cat);

       }}

      >

       {cat}

      </button>

     ))

    }

   </div>

   {/* OFFERS GRID */}

   <div className='row g-4'>

    {

     filteredOffers.map((offer,index)=>(

      <div

       key={index}

       className='col-lg-4 col-md-6 col-sm-12'

      >

       <div

        className='card h-100 overflow-hidden'

        style={{

         borderRadius:'25px',

         position:'relative'

        }}

       >

        {/* DISCOUNT */}

        <div

         style={{

          position:'absolute',

          top:'20px',

          left:'20px',

          background:'#314131',

          color:'#fff',

          padding:'10px 18px',

          borderRadius:'12px',

          fontWeight:'700',

          zIndex:'2'

         }}

        >

         {offer.discount}

        </div>

        {/* IMAGE */}

        <img

         src={offer.image}

         alt={offer.name}

         className='img-fluid'

         style={{

          height:'260px',

          objectFit:'cover',

          width:'100%'

         }}

        />

        {/* CONTENT */}

        <div className='p-4 text-center'>

         <span

          style={{

           color:'#E5D3B3',

           fontWeight:'600'

          }}

         >

          {offer.category}

         </span>

         <h3 className='fw-bold mt-2'>

          {offer.name}

         </h3>

         <p className='mt-3'>

          {offer.description}

         </p>

         {/* PRICE */}

         <div className='my-4'>

          <span

           style={{

            textDecoration:'line-through',

            marginRight:'12px',

            color:'gray',

            fontSize:'18px'

           }}

          >

           ${offer.oldPrice}

          </span>

          <span

           style={{

            color:'#E5D3B3',

            fontSize:'28px',

            fontWeight:'700'

           }}

          >

           ${offer.newPrice}

          </span>

         </div>

         {/* BUTTON */}

         <button

          className='btn btn-dark w-100'

          onClick={()=>{

           addToCart(offer);

          }}

         >

          Order Now

         </button>

        </div>

       </div>

      </div>

     ))

    }

   </div>

   {/* POPUP */}

   {

    popup &&

    <div

     className='popup-animation'

     style={{

      position:'fixed',

      top:'30px',

      right:'30px',

      background:'#314131',

      color:'#F5F5F0',

      padding:'20px 30px',

      borderRadius:'18px',

      zIndex:'9999',

      border:'2px solid #E5D3B3',

      boxShadow:'0 10px 30px rgba(0,0,0,0.3)'

     }}

    >

     ✓ {popup}

    </div>

   }

  </div>

 )

}

export default Offers;