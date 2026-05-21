import { useState } from 'react';

import axios from 'axios';

function Reservation(){

 const [name,setName] =
 useState('');

 const [phone,setPhone] =
 useState('');

 const [guests,setGuests] =
 useState('');

 const [date,setDate] =
 useState('');

 const [time,setTime] =
 useState('');

 const [showPopup,setShowPopup] =
 useState(false);

 const submitHandler = async(e)=>{

  e.preventDefault();

  try{

   await axios.post(

    'http://192.168.1.12:5000/api/reservations',

    {

     name,
     phone,
     guests,
     date,
     time

    }

   );

   setShowPopup(true);

   setName('');
   setPhone('');
   setGuests('');
   setDate('');
   setTime('');

  }catch(error){

   alert('Reservation Failed');

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

     TABLE RESERVATION

    </span>

    <h1

     className='fw-bold my-3'

     style={{

      fontSize:'60px'

     }}

    >

     Reserve Your Table

    </h1>

    <p className='fs-5'>

     Enjoy a luxury Italian dining
     experience with your family
     and friends.

    </p>

   </div>

   {/* CONTENT */}

   <div className='row justify-content-center'>

    <div className='col-lg-7'>

     <div className='card p-5'>

      <form onSubmit={submitHandler}>

       {/* NAME */}

       <input

        type='text'

        className='form-control mb-4'

        placeholder='Full Name'

        value={name}

        onChange={(e)=>{

         setName(e.target.value);

        }}

        required

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

        required

       />

       {/* GUESTS */}

       <input

        type='number'

        className='form-control mb-4'

        placeholder='Number Of Guests'

        value={guests}

        onChange={(e)=>{

         setGuests(e.target.value);

        }}

        required

       />

       {/* DATE */}

       <input

        type='date'

        className='form-control mb-4'

        value={date}

        onChange={(e)=>{

         setDate(e.target.value);

        }}

        required

       />

       {/* TIME */}

       <input

        type='time'

        className='form-control mb-4'

        value={time}

        onChange={(e)=>{

         setTime(e.target.value);

        }}

        required

       />

       {/* BUTTON */}

       <button

        className='btn btn-dark w-100'

       >

        Reserve Now

       </button>

      </form>

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

       Reservation Confirmed

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

       Your table has been reserved
       successfully.
       We look forward to welcoming
       you to Trio Restaurant.

      </p>

      {/* BUTTON */}

      <button

       className='btn btn-dark mt-4'

       onClick={()=>{

        setShowPopup(false);

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

export default Reservation;