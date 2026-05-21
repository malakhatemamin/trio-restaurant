import { useState } from 'react';

import axios from 'axios';

function Login(){

 const [email,setEmail] =
 useState('');

 const [password,setPassword] =
 useState('');

 const submitHandler = async(e)=>{

  e.preventDefault();

  try{

   const {data} = await axios.post(

    'http://192.168.1.12:5000/api/users/login',

    {

     email,
     password

    }

   );

   /* SAVE USER */

   localStorage.setItem(

    'userInfo',

    JSON.stringify(data)

   );

   /* REDIRECT */

   window.location.href='/';

  }catch(error){

   alert('Login Failed');

  }

 };

 return(

  <div className='container py-5'>

   <div className='row justify-content-center'>

    <div className='col-md-6'>

     <div className='card p-5'>

      <h1 className='text-center mb-4'>

       Login

      </h1>

      <form onSubmit={submitHandler}>

       <input

        type='email'

        className='form-control mb-4'

        placeholder='Email'

        value={email}

        onChange={(e)=>{

         setEmail(e.target.value);

        }}

       />

       <input

        type='password'

        className='form-control mb-4'

        placeholder='Password'

        value={password}

        onChange={(e)=>{

         setPassword(e.target.value);

        }}

       />

       <button
        className='btn btn-dark w-100'
       >

        Login

       </button>

      </form>

     </div>

    </div>

   </div>

  </div>

 )

}

export default Login;