import { useState } from 'react';

function Checkout(){

 /* GET CART */

 const cartItems = JSON.parse(

  localStorage.getItem('cart')

 ) || [];

 /* TOTAL */

 const total = cartItems.reduce(

  (acc,item)=>acc + item.price,

  0

 );

 /* FORM */

 const [name,setName] =
 useState('');

 const [phone,setPhone] =
 useState('');

 const [address,setAddress] =
 useState('');

 const [notes,setNotes] =
 useState('');

 const [payment,setPayment] =
 useState('Cash');

 /* POPUP */

 const [showPopup,setShowPopup] =
 useState(false);

 /* PLACE ORDER */

 const placeOrder = (e)=>{

  e.preventDefault();

  if(

   !name ||
   !phone ||
   !address

  ){

   alert('Please Fill All Fields');

   return;

  }

  /* SHOW SUCCESS */

  setShowPopup(true);

  /* CLEAR CART */

  localStorage.removeItem('cart');

 };

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

     CHECKOUT

    </span>

    <h1 className='fw-bold my-3'>

     Complete Your Order

    </h1>

   </div>

   <div className='row g-5'>

    {/* LEFT */}

    <div className='col-lg-7'>

     <div className='card p-5'>

      <h2 className='mb-4'>

       Delivery Information

      </h2>

      <form onSubmit={placeOrder}>

       {/* NAME */}

       <input

        type='text'

        className='form-control mb-4'

        placeholder='Full Name'

        value={name}

        onChange={(e)=>{

         setName(e.target.value);

        }}

       />

       {/* PHONE */}

       <input

        type='text'

        className='form-control mb-4'

        placeholder='Phone Number'

        value={phone}

        onChange={(e)=>{

         setPhone(e.target.value);

        }}

       />

       {/* ADDRESS */}

       <textarea

        rows='4'

        className='form-control mb-4'

        placeholder='Delivery Address'

        value={address}

        onChange={(e)=>{

         setAddress(e.target.value);

        }}

       >

       </textarea>

       {/* NOTES */}

       <textarea

        rows='3'

        className='form-control mb-4'

        placeholder='Additional Notes (Optional)'

        value={notes}

        onChange={(e)=>{

         setNotes(e.target.value);

        }}

       >

       </textarea>

       {/* PAYMENT */}

       <h5 className='mb-3'>

        Payment Method

       </h5>

       <div className='d-flex gap-4 mb-4'>

        <div>

         <input

          type='radio'

          checked={payment === 'Cash'}

          onChange={()=>{

           setPayment('Cash');

          }}

         />

         {' '}
         Cash

        </div>

        <div>

         <input

          type='radio'

          checked={payment === 'Visa'}

          onChange={()=>{

           setPayment('Visa');

          }}

         />

         {' '}
         Visa

        </div>

       </div>

       {/* VISA INFO */}

       {

        payment === 'Visa' &&

        <div className='mb-4'>

         <input

          type='text'

          className='form-control mb-3'

          placeholder='Card Number'

         />

         <div className='row'>

          <div className='col-md-6'>

           <input

            type='text'

            className='form-control mb-3'

            placeholder='MM/YY'

           />

          </div>

          <div className='col-md-6'>

           <input

            type='text'

            className='form-control mb-3'

            placeholder='CVV'

           />

          </div>

         </div>

        </div>

       }

       {/* BUTTON */}

       <button

        className='btn btn-dark w-100'

       >

        Place Order

       </button>

      </form>

     </div>

    </div>

    {/* RIGHT */}

    <div className='col-lg-5'>

     <div className='card p-4'>

      <h2 className='mb-4'>

       Order Summary

      </h2>

      {

       cartItems.length === 0 ?

       <p>

        Your cart is empty

       </p>

       :

       <>

        {

         cartItems.map((item,index)=>(

          <div

           key={index}

           className='d-flex justify-content-between mb-3'

          >

           <span>

            {item.name}

           </span>

           <span>

            ${item.price}

           </span>

          </div>

         ))

        }

        <hr />

        <div className='d-flex justify-content-between'>

         <h4>

          Total

         </h4>

         <h4>

          ${total}

         </h4>

        </div>

       </>

      }

     </div>

    </div>

   </div>

   {/* SUCCESS POPUP */}

   {

    showPopup &&

    <div

     style={{

      position:'fixed',

      top:'0',

      left:'0',

      width:'100%',

      height:'100vh',

      background:'rgba(0,0,0,0.7)',

      display:'flex',

      justifyContent:'center',

      alignItems:'center',

      zIndex:'9999'

     }}

    >

     <div

      style={{

       width:'500px',

       background:'#314131',

       padding:'50px',

       borderRadius:'30px',

       textAlign:'center',

       border:'2px solid #E5D3B3'

      }}

     >

      <div

       style={{

        fontSize:'60px',

        color:'#7CFC00'

       }}

      >

       ✓

      </div>

      <h1

       style={{

        color:'#E5D3B3',

        marginTop:'20px'

       }}

      >

       Order Placed

      </h1>

      <p

       style={{

        color:'#F5F5F0',

        marginTop:'20px',

        lineHeight:'1.8'

       }}

      >

       Your order has been placed
       successfully.
       Thank you for choosing
       Trio Restaurant.

      </p>

      <button

       className='btn btn-dark mt-4'

       onClick={()=>{

        setShowPopup(false);

        window.location.href='/';

       }}

      >

       Continue

      </button>

     </div>

    </div>

   }

  </div>

 )

}

export default Checkout;