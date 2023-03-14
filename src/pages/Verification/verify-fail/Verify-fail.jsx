import React from 'react'
import { NavBar } from '../../../common/NavBar';
import { useNavigate } from 'react-router-dom';

const VerifyFail = () => {
   let navigate = useNavigate();

   return (
         <>
         <NavBar/>
         <div className="wrapper">
            <div className='form-wrapper'>
               <h2>Account Verification Failed </h2>
                  <div className='submit'>
                     <button onClick={()=>{
                        navigate("/home")
                     }} className='submit-btn'>Head back to HomePage</button>
                  </div>
            </div>
         </div>
      </>
   )
}
export default VerifyFail;