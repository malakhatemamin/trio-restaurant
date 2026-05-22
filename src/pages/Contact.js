import { useState } from 'react';

import axios from 'axios';

function Contact(){

 const [name,setName] =
 useState('');

 const [email,setEmail] =
 useState('');

 const [message,setMessage] =
 useState('');

 const [showSuccess,setShowSuccess] =
 useState(false);

 const [showError,setShowError] =
 useState(false);

 const submitHandler = async(e)=>{

  e.preventDefault();

  try{

   await axios.post(

    'http://192.168.1.12:5000/api/messages',
    {

     name,
     email,
     message

    }

   );

   setShowSuccess(true);

   setName('');

   setEmail('');

   setMessage('');

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

     CONTACT US

    </span>

    <h1

     className='fw-bold my-3'

     style={{

      fontSize:'60px'

     }}

    >

     Get In Touch

    </h1>

    <p className='fs-5'>

     We would love to hear from you.
     Send us your message anytime.

    </p>

   </div>

   {/* CONTENT */}

   <div className='row align-items-center'>

    {/* LEFT */}

    <div className='col-md-6 mb-4'>

     <img

      src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop'

      alt='restaurant'

      className='img-fluid shadow'

      style={{

       height:'650px',

       width:'100%',

       objectFit:'cover',

       borderRadius:'30px'

      }}

     />

    </div>

    {/* RIGHT */}

    <div className='col-md-6'>

     <div className='card p-5'>

      <h2 className='mb-4'>

       Send Message

      </h2>

      <form onSubmit={submitHandler}>

       {/* NAME */}

       <div className='mb-4'>

        <input

         type='text'

         className='form-control'

         placeholder='Your Name'

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

       {/* MESSAGE */}

       <div className='mb-4'>

        <textarea

         className='form-control'

         rows='6'

         placeholder='Write Your Message'

         value={message}

         onChange={(e)=>{

          setMessage(e.target.value);

         }}

         required

        >

        </textarea>

       </div>

       {/* BUTTON */}

       <button

        type='submit'

        className='btn btn-dark w-100'

       >

        Send Message

       </button>

      </form>

     </div>

    </div>

   </div>

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

       background:'#314131',

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

       Message Sent

      </h1>

      {/* TEXT */}

      <p

       style={{

        marginTop:'20px',

        color:'#F5F5F0',

        fontSize:'18px',

        lineHeight:'1.8'

       }}

      >

       Thank you for contacting
       Trio Restaurant.
       We will reply soon.

      </p>

      {/* BUTTON */}

      <button

       className='btn btn-dark mt-4'

       onClick={()=>{

        setShowSuccess(false);

       }}

      >

       Continue

      </button>

     </div>

    </div>

   }

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

       background:'#314131',

       padding:'50px',

       borderRadius:'30px',

       textAlign:'center',

       border:'2px solid #E5D3B3'

      }}

     >

      <h1 style={{color:'#ff4d4d'}}>

       Failed

      </h1>

      <p className='mt-3'>

       Something went wrong.

      </p>

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

  </div>

 )

}

export default Contact;