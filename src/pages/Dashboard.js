import { useState } from 'react';

function Dashboard(){

 const [pin,setPin] = useState('');

 const [access,setAccess] =
 useState(false);

 const [error,setError] =
 useState('');

 function checkPin(){

  if(pin === '1234'){

   setAccess(true);

   setError('');

  }

  else{

   setError('Wrong PIN');

  }

 }

 // LOGIN SCREEN

 if(!access){

  return(

   <div
    className='container d-flex justify-content-center align-items-center'
    style={{
     minHeight:'100vh'
    }}
   >

    <div
     className='card p-5 shadow-lg'
     style={{

      width:'400px',
      borderRadius:'20px'

     }}
    >

     <h1 className='text-center mb-4'>
      Admin Access
     </h1>

     <input
      type='password'
      placeholder='Enter Admin PIN'
      className='form-control form-control-lg mb-4'
      onChange={(e)=>
       setPin(e.target.value)
      }
     />

     {

      error &&

      <p className='text-danger text-center'>

       {error}

      </p>

     }

     <button
      className='btn btn-dark btn-lg'
      onClick={checkPin}
     >

      Enter Dashboard

     </button>

    </div>

   </div>

  )

 }

 // DASHBOARD

 return(

  <div className='container py-5'>

   <h1 className='text-center mb-5 fw-bold'>

    Admin Dashboard

   </h1>

   <div className='row'>

    {/* TOTAL ORDERS */}

    <div className='col-md-4 mb-4'>

     <div
      className='card p-5 text-center'
     >

      <h2>Total Orders</h2>

      <h1 className='text-primary fw-bold'>
       120
      </h1>

     </div>

    </div>

    {/* USERS */}

    <div className='col-md-4 mb-4'>

     <div
      className='card p-5 text-center'
     >

      <h2>Total Users</h2>

      <h1 className='text-success fw-bold'>
       85
      </h1>

     </div>

    </div>

    {/* SALES */}

    <div className='col-md-4 mb-4'>

     <div
      className='card p-5 text-center'
     >

      <h2>Total Sales</h2>

      <h1 className='text-danger fw-bold'>
       25K EGP
      </h1>

     </div>

    </div>

   </div>

   {/* RECENT ORDERS */}

   <div className='card p-4 mt-5'>

    <h2 className='mb-4'>

     Recent Orders

    </h2>

    <table className='table'>

     <thead>

      <tr>

       <th>Customer</th>
       <th>Meal</th>
       <th>Status</th>

      </tr>

     </thead>

     <tbody>

      <tr>

       <td>Ahmed</td>

       <td>Burger</td>

       <td className='text-success'>
        Delivered
       </td>

      </tr>

      <tr>

       <td>Sara</td>

       <td>Pizza</td>

       <td className='text-warning'>
        Preparing
       </td>

      </tr>

      <tr>

       <td>Omar</td>

       <td>Pasta</td>

       <td className='text-primary'>
        On The Way
       </td>

      </tr>

     </tbody>

    </table>

   </div>

  </div>

 )

}

export default Dashboard;