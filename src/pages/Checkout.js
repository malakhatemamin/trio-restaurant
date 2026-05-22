import { useState } from 'react';

function Checkout(){

 /* GET CART */

 const cartItems = (

  JSON.parse(

   localStorage.getItem('cart')

  ) || []

 ).map((item)=>({

  ...item,

  quantity:item.quantity || 1

 }));

 /* TOTAL */

 const total = cartItems.reduce(

  (acc,item)=>

   acc + (

    Number(item.price) *

    Number(item.quantity || 1)

   ),

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

 const placeOrder = async(e)=>{

  e.preventDefault();

  if(

   !name ||
   !phone ||
   !address

  ){

   alert('Please Fill All Fields');

   return;

  }

  try{

   await fetch(

    'http://192.168.1.12:5000/api/orders',

    {

     method:'POST',

     headers:{

      'Content-Type':'application/json'

     },

     body:JSON.stringify({

      name,
      phone,
      address,
      payment,
      notes,
      items:cartItems,
      total

     })

    }

   );

   /* SHOW POPUP */

   setShowPopup(true);

   /* CLEAR CART */

   localStorage.removeItem('cart');

  }catch(error){

   alert('Order Failed');

  }

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

        {/* CASH */}

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

        {/* VISA */}

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

           className='mb-4'

          >

           <div className='d-flex justify-content-between'>

            <span>

             {item.name}
             {' '}
             x
             {' '}
             {item.quantity}

            </span>

            <span>

             $

             {

              Number(item.price) *

              Number(item.quantity)

             }

            </span>

           </div>

           {

            item.notes &&

            <small style={{color:'gray'}}>

             Notes:
             {' '}
             {item.notes}

            </small>

           }

          </div>

         ))

        }

        <hr />

        {/* TOTAL */}

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

   {/* POPUP */}

   {

    showPopup &&

    <div

     className='popup-animation'

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

      {/* ICON */}

      <div

       style={{

        fontSize:'60px',

        color:'#7CFC00'

       }}

      >

       ✓

      </div>

      {/* TITLE */}

      <h1

       style={{

        color:'#E5D3B3',

        marginTop:'20px'

       }}

      >

       Order Placed

      </h1>

      {/* TEXT */}

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

      {/* BUTTON */}

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