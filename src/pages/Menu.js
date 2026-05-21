import { useState } from 'react';

function Menu(){

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

 const addToCart = (item)=>{

  let cart = JSON.parse(

   localStorage.getItem('cart')

  ) || [];

  cart.push(item);

  localStorage.setItem(

   'cart',

   JSON.stringify(cart)

  );

  setPopup(`${item.name} Added To Cart`);

  setTimeout(()=>{

   setPopup('');

  },2000);

 };

 /* MENU ITEMS */

 const menuItems = [

  {

   name:'Alfredo Pasta',

   price:20,

   category:'Pasta',

   image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',

   description:'Creamy parmesan pasta with grilled chicken.'

  },

  {

   name:'Lasagna',

   price:22,

   category:'Pasta',

   image:'https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1200&auto=format&fit=crop',

   description:'Traditional baked Italian lasagna.'

  },

  {

   name:'Margherita Pizza',

   price:18,

   category:'Pizza',

   image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',

   description:'Fresh mozzarella and basil pizza.'

  },

  {

   name:'Truffle Pizza',

   price:28,

   category:'Pizza',

   image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop',

   description:'Luxury truffle pizza with mozzarella cheese.'

  },

  {

   name:'Italian Steak',

   price:30,

   category:'Main Course',

   image:'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop',

   description:'Premium grilled steak with herbs.'

  },

  {

   name:'Grilled Salmon',

   price:32,

   category:'Main Course',

   image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop',

   description:'Fresh salmon grilled with Italian seasoning.'

  },

  {

   name:'Caesar Salad',

   price:14,

   category:'Salads',

   image:'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop',

   description:'Fresh lettuce with parmesan and Caesar dressing.'

  },

  {

   name:'Bruschetta',

   price:10,

   category:'Appetizers',

   image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',

   description:'Grilled bread topped with tomatoes and basil.'

  },

  {

   name:'Mushroom Soup',

   price:13,

   category:'Soup',

   image:'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop',

   description:'Warm creamy mushroom soup with herbs.'

  },

  {

   name:'Tiramisu',

   price:12,

   category:'Desserts',

   image:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop',

   description:'Classic Italian dessert with coffee flavor.'

  },

  {

   name:'Lemon Cheesecake',

   price:11,

   category:'Desserts',

   image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop',

   description:'Creamy cheesecake with fresh lemon flavor.'

  }

 ];

 /* FILTER */

 const filteredItems = menuItems.filter((item)=>{

  return(

   (category === 'All' ||

    item.category === category)

   &&

   item.name.toLowerCase().includes(

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

     OUR MENU

    </span>

    <h1

     className='fw-bold mt-3'

     style={{

      fontSize:'55px'

     }}

    >

     Italian Specialties

    </h1>

   </div>

   {/* SEARCH */}

   <div className='row mb-5 justify-content-center'>

    <div className='col-lg-5'>

     <input

      type='text'

      className='form-control'

      placeholder='Search food...'

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
      'Pasta',
      'Pizza',
      'Main Course',
      'Salads',
      'Desserts'

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

   {/* MENU GRID */}

   <div className='row g-4'>

    {

     filteredItems.map((item,index)=>(

      <div

       key={index}

       className='col-lg-3 col-md-6 col-sm-12'

      >

       <div

        className='card h-100 overflow-hidden'

        style={{

         borderRadius:'25px'

        }}

       >

        {/* IMAGE */}

        <img

         src={item.image}

         alt={item.name}

         className='img-fluid'

         style={{

          height:'250px',

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

          {item.category}

         </span>

         <h3 className='fw-bold mt-2'>

          {item.name}

         </h3>

         <p className='mt-3'>

          {item.description}

         </p>

         <h4

          className='my-4'

          style={{

           color:'#E5D3B3',

           fontWeight:'700'

          }}

         >

          ${item.price}

         </h4>

         {/* BUTTON */}

         <button

          className='btn btn-dark w-100'

          onClick={()=>{

           addToCart(item);

          }}

         >

          Add To Cart

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

export default Menu;