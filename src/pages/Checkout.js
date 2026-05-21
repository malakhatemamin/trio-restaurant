import { useState } from 'react';

import axios from 'axios';

function Checkout({cart}){

 const [success,setSuccess] =
 useState(false);

 const [name,setName] =
 useState('');

 const [phone,setPhone] =
 useState('');

 const [address,setAddress] =
 useState('');

 const [city,setCity] =
 useState('');

 const [payment,setPayment] =
 useState('');

 let total = 0;

 if(cart){

  cart.forEach((item)=>{

   total += item.price * item.quantity;

  });

 }

 async function handleOrder(e){

  e.preventDefault();

  try{

   const res = await axios.post(

    'http://localhost:5000/api/orders/create',

    {

     customerName:name,

     phone,

     address,

     city,

     paymentMethod:payment,

     items:cart,

     total

    }

   );

   alert(res.data.message);

   setSuccess(true);

  }

  catch(err){

   alert('Order Failed');

  }

 }

 return(

  <div className='container py-5'>

   <div className='row'>

    {/* FORM */}

    <div className='col-md-7 mb-4'>

     <div className='card p-5'>

      <h1 className='mb-4'>
       Billing Details
      </h1>

      <form onSubmit={handleOrder}>

       <input
        type='text'
        placeholder='Full Name'
        className='form-control form-control-lg mb-4'
        value={name}
        onChange={(e)=>
         setName(e.target.value)
        }
        required
       />

       <input
        type='text'
        placeholder='Phone Number'
        className='form-control form-control-lg mb-4'
        value={phone}
        onChange={(e)=>
         setPhone(e.target.value)
        }
        required
       />

       <input
        type='text'
        placeholder='Address'
        className='form-control form-control-lg mb-4'
        value={address}
        onChange={(e)=>
         setAddress(e.target.value)
        }
        required
       />

       <input
        type='text'
        placeholder='City'
        className='form-control form-control-lg mb-4'
        value={city}
        onChange={(e)=>
         setCity(e.target.value)
        }
        required
       />

       <select
        className='form-control form-control-lg mb-4'
        value={payment}
        onChange={(e)=>
         setPayment(e.target.value)
        }
        required
       >

        <option value=''>
         Select Payment Method
        </option>

        <option>
         Cash
        </option>

        <option>
         Credit Card
        </option>

       </select>

       <button
        className='btn btn-dark btn-lg w-100'
       >

        Confirm Order

       </button>

      </form>

     </div>

    </div>

    {/* SUMMARY */}

    <div className='col-md-5'>

     <div className='card p-5'>

      <h1 className='mb-4'>
       Order Summary
      </h1>

      {

       cart && cart.length > 0 ?

       cart.map((item)=>{

        return(

         <div
          className='d-flex justify-content-between mb-3'
          key={item.id}
         >

          <div>

           <h5>{item.name}</h5>

           <p>

            Quantity:
            {' '}
            {item.quantity}

           </p>

          </div>

          <h5>

           {item.price * item.quantity}
           {' '}
           EGP

          </h5>

         </div>

        )

       })

       :

       <p>
        Cart Is Empty
       </p>

      }

      <hr />

      <div className='d-flex justify-content-between'>

       <h3>Total</h3>

       <h3 className='text-success'>

        {total} EGP

       </h3>

      </div>

     </div>

    </div>

   </div>

   {

    success &&

    <div
     className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'
     style={{
      background:'rgba(0,0,0,0.5)'
     }}
    >

     <div
      className='card p-5 text-center'
      style={{
       width:'400px'
      }}
     >

      <h1 className='text-success'>
       ✅
      </h1>

      <h2>
       Order Confirmed
      </h2>

      <p>

       Your order has been saved successfully.

      </p>

      <button
       className='btn btn-dark mt-3'
       onClick={()=>
        setSuccess(false)
       }
      >

       Close

      </button>

     </div>

    </div>

   }

  </div>

 )

}

export default Checkout;