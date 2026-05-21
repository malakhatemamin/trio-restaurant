import { Link } from 'react-router-dom';

function Cart({

 cart,
 addToCart,
 removeFromCart

}){

 let total = 0;

 cart.forEach((item)=>{

  total += item.price * item.quantity;

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

     YOUR CART

    </span>

    <h1
     className='fw-bold my-3'
     style={{
      fontSize:'60px'
     }}
    >

     Shopping Cart

    </h1>

   </div>

   {

    cart.length === 0 ?

    /* EMPTY */

    <div className='text-center py-5'>

     <img

      src='https://cdn-icons-png.flaticon.com/512/2038/2038854.png'

      alt='empty'

      style={{

       width:'180px',

       opacity:'0.8'

      }}

     />

     <h2 className='mt-4'>

      Your Cart Is Empty

     </h2>

     <p>

      Add delicious meals to start
      your order.

     </p>

     <Link
      to='/menu'
      className='btn btn-dark mt-3'
     >

      Explore Menu

     </Link>

    </div>

    :

    <>

     {/* ITEMS */}

     {

      cart.map((item)=>{

       return(

        <div
         className='card p-4 mb-4'
         key={item.id}
        >

         <div className='row align-items-center'>

          {/* IMAGE */}

          <div className='col-md-3 mb-3'>

           <img

            src={item.image}

            alt='food'

            className='img-fluid'

            style={{

             height:'200px',

             width:'100%',

             objectFit:'cover'

            }}

           />

          </div>

          {/* INFO */}

          <div className='col-md-5'>

           <h3 className='fw-bold'>

            {item.name}

           </h3>

           <p>

            Fresh Italian meal made
            with premium ingredients.

           </p>

           <h4
            style={{
             color:'#E5D3B3'
            }}
           >

            {item.price} EGP

           </h4>

           {/* NOTES */}

           <textarea

            className='form-control mt-3'

            rows='3'

            placeholder='Add notes for your order...'

           ></textarea>

          </div>

          {/* QUANTITY */}

          <div className='col-md-4 text-center'>

           <div
            className='d-flex justify-content-center align-items-center mb-4'
           >

            <button

             className='btn btn-danger'

             onClick={()=>
              removeFromCart(item.id)
             }

            >

             -

            </button>

            <h4 className='mx-4'>

             {item.quantity}

            </h4>

            <button

             className='btn btn-dark'

             onClick={()=>
              addToCart(item)
             }

            >

             +

            </button>

           </div>

           <h4
            style={{
             color:'#E5D3B3'
            }}
           >

            {item.price * item.quantity}
            {' '}
            EGP

           </h4>

          </div>

         </div>

        </div>

       )

      })

     }

     {/* SUMMARY */}

     <div
      className='card p-5 mt-5'
     >

      <div
       className='d-flex justify-content-between align-items-center'
      >

       <h2
        className='fw-bold'
       >

        Final Total

       </h2>

       <h1
        style={{
         color:'#E5D3B3'
        }}
       >

        {total} EGP

       </h1>

      </div>

      <Link
       to='/checkout'
       className='btn btn-dark btn-lg mt-4'
      >

       Proceed To Checkout

      </Link>

     </div>

    </>

   }

  </div>

 )

}

export default Cart;