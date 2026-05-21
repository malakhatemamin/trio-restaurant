import { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Signup(){

 const navigate = useNavigate();

 const [name,setName] =
 useState('');

 const [email,setEmail] =
 useState('');

 const [password,setPassword] =
 useState('');

 const [showError,setShowError] =
 useState(false);

 const [showSuccess,setShowSuccess] =
 useState(false);

 const submitHandler = async(e)=>{

  e.preventDefault();

  try{

   await axios.post(

    'http://localhost:5000/api/users/register',

    {

     name,
     email,
     password

    }

   );

   setShowSuccess(true);

   setTimeout(()=>{

    navigate('/login');

   },2000);

  }catch(error){

   setShowError(true);

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

     CREATE ACCOUNT

    </span>

    <h1
     className='fw-bold my-3'
     style={{
      fontSize:'60px'
     }}
    >

     Join Trio Restaurant

    </h1>

   </div>

   {/* FORM */}

   <div className='row justify-content-center'>

    <div className='col-md-6'>

     <div className='card p-5'>

      <form onSubmit={submitHandler}>

       {/* NAME */}

       <div className='mb-4'>

        <input

         type='text'

         className='form-control'

         placeholder='Full Name'

         value={name}

         onChange={(e)=>{

          setName(e.target.value);

         }}

         required

        />

       </div>

       {/* EMAIL */}

       <div className='mb-4'>

        <input

         type='email'

         className='form-control'

         placeholder='Email Address'

         value={email}

         onChange={(e)=>{

          setEmail(e.target.value);

         }}

         required

        />

       </div>

       {/* PASSWORD */}

       <div className='mb-4'>

        <input

         type='password'

         className='form-control'

         placeholder='Password'

         value={password}

         onChange={(e)=>{

          setPassword(e.target.value);

         }}

         required

        />

       </div>

       {/* BUTTON */}

       <button
        type='submit'
        className='btn btn-dark w-100'
       >

        Create Account

       </button>

      </form>

     </div>

    </div>

   </div>

   {/* ERROR MODAL */}

   {

    showError &&

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

       background:'#384A38',

       padding:'50px',

       borderRadius:'30px',

       textAlign:'center',

       border:'2px solid #E5D3B3',

       boxShadow:'0 15px 40px rgba(0,0,0,0.4)'

      }}

     >

      {/* ICON */}

      <div

       style={{

        width:'100px',

        height:'100px',

        borderRadius:'50%',

        background:'#5A1E1E',

        margin:'auto',

        display:'flex',

        justifyContent:'center',

        alignItems:'center',

        fontSize:'50px',

        color:'#ff4d4d',

        border:'3px solid #ff4d4d'

       }}

      >

       ✕

      </div>

      {/* TITLE */}

      <h1

       style={{

        marginTop:'30px',

        color:'#E5D3B3'

       }}

      >

       Registration Failed

      </h1>

      {/* TEXT */}

      <p

       style={{

        marginTop:'20px',

        color:'#F5F5F0',

        fontSize:'18px'

       }}

      >

       Something went wrong while
       creating your account.

      </p>

      {/* BUTTON */}

      <button

       className='btn btn-dark mt-4'

       onClick={()=>{

        setShowError(false);

       }}

      >

       Try Again

      </button>

     </div>

    </div>

   }

   {/* SUCCESS MODAL */}

   {

    showSuccess &&

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

       background:'#384A38',

       padding:'50px',

       borderRadius:'30px',

       textAlign:'center',

       border:'2px solid #E5D3B3',

       boxShadow:'0 15px 40px rgba(0,0,0,0.4)'

      }}

     >

      {/* ICON */}

      <div

       style={{

        width:'100px',

        height:'100px',

        borderRadius:'50%',

        background:'#355E3B',

        margin:'auto',

        display:'flex',

        justifyContent:'center',

        alignItems:'center',

        fontSize:'50px',

        color:'#7CFC00',

        border:'3px solid #7CFC00'

       }}

      >

       ✓

      </div>

      {/* TITLE */}

      <h1

       style={{

        marginTop:'30px',

        color:'#E5D3B3'

       }}

      >

       Registration Successful

      </h1>

      {/* TEXT */}

      <p

       style={{

        marginTop:'20px',

        color:'#F5F5F0',

        fontSize:'18px'

       }}

      >

       Your account has been
       created successfully.

      </p>

     </div>

    </div>

   }

  </div>

 )

}

export default Signup;