import { useEffect, useState } from 'react';

function Cart(){

 /* CART */

 const [cartItems,setCartItems] =
 useState([]);

 /* LOAD CART */

 useEffect(()=>{

  const savedCart = JSON.parse(

   localStorage.getItem('cart')

  ) || [];

  /* ADD QUANTITY + NOTES */

  const updatedCart = savedCart.map((item)=>({

   ...item,

   quantity:item.quantity || 1,

   notes:item.notes || ''

  }));

  setCartItems(updatedCart);

 },[]);

 /* SAVE */

 const saveCart = (updatedCart)=>{

  setCartItems(updatedCart);

  localStorage.setItem(

   'cart',

   JSON.stringify(updatedCart)

  );

 };

 /* INCREASE */

 const increaseQty = (index)=>{

  const updatedCart = [...cartItems];

  updatedCart[index].quantity += 1;

  saveCart(updatedCart);

 };

 /* DECREASE */

 const decreaseQty = (index)=>{

  const updatedCart = [...cartItems];

  if(updatedCart[index].quantity > 1){

   updatedCart[index].quantity -= 1;

  }else{

   updatedCart.splice(index,1);

  }

  saveCart(updatedCart);

 };

 /* NOTES */

 const handleNotes = (index,value)=>{

  const updatedCart = [...cartItems];

  updatedCart[index].notes = value;

  saveCart(updatedCart);

 };

 /* TOTAL */

 const total = cartItems.reduce(

  (acc,item)=>

   acc + (item.price * item.quantity),

  0

 );

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

     YOUR CART

    </span>

    <h1 className='fw-bold my-3'>

     Cart Summary

    </h1>

   </div>

   {

    cartItems.length === 0 ?

    <div className='text-center'>

     <h3>

      Your cart is empty

     </h3>

    </div>

    :

    <>

     {

      cartItems.map((item,index)=>(

       <div

        key={index}

        className='card p-4 mb-4'

       >

        <div className='row align-items-center'>

         {/* LEFT */}

         <div className='col-lg-6'>

          <h3>

           {item.name}

          </h3>

          <p>

           Luxury Italian Dish

          </p>

          <h5>

           ${item.price}

          </h5>

         </div>

         {/* CENTER */}

         <div className='col-lg-3 text-center'>

          <div

           className='d-flex justify-content-center align-items-center gap-3'

          >

           {/* MINUS */}

           <button

            className='btn btn-dark'

            onClick={()=>{

             decreaseQty(index);

            }}

           >

            -

           </button>

           {/* QTY */}

           <h4>

            {item.quantity}

           </h4>

           {/* PLUS */}

           <button

            className='btn btn-dark'

            onClick={()=>{

             increaseQty(index);

            }}

           >

            +

           </button>

          </div>

         </div>

         {/* RIGHT */}

         <div className='col-lg-3 text-end'>

          <h4>

           ${item.price * item.quantity}

          </h4>

         </div>

        </div>

        {/* NOTES */}

        <textarea

         rows='2'

         className='form-control mt-4'

         placeholder='Add Notes (Extra Cheese, No Onion...)'

         value={item.notes}

         onChange={(e)=>{

          handleNotes(

           index,
           e.target.value

          );

         }}

        >

        </textarea>

       </div>

      ))

     }

     {/* TOTAL */}

     <div className='card p-4 text-center'>

      <h2>

       Total:
       {' '}
       ${total}

      </h2>

      <a

       href='/checkout'

       className='btn btn-dark mt-4'

      >

       Proceed To Checkout

      </a>

     </div>

    </>

   }

  </div>

 )

}

export default Cart;