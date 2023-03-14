import React from 'react'
import { useState } from 'react';
import { NavBar } from '../../common/NavBar';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
   let navigate = useNavigate();
   const URL = "api/sessions";
   const [password,setPassword] = useState("");
   const [email,setEmail] = useState("");
   const [message,setMessage] = useState("");
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const login_request = () =>{
      var data = JSON.stringify({
         "email": "ammarkaid321@gmail.com",
         "password": "12345678a*"
       });
       
       var config = {
         method: 'post',
       maxBodyLength: Infinity,
         url: URL,
         headers: { 
           'Content-Type': 'application/json'
         },
         data : data
       };
       
       axios(config)
       .then(function (response) {
            const tokens = response.data;
            localStorage.setItem('access-token',tokens.accessToken);
            localStorage.setItem('refresh-token',tokens.refreshToken);
            localStorage.setItem('email',email);
            navigate('/');
       })
       .catch(function (error) {
         console.log(error);
         setMessage("Invalid email or password, Make sure that you verified your email before logging in!")
         handleShow();
       });
   }

   return (
         <>
         <NavBar/>
         <div className="wrapper">
            <div className='form-wrapper'>
               <h2>Login </h2>
                  <div className='email'>
                     <label htmlFor="email">Email:</label>
                     <input type='email'  value={email} name='email' onChange={(e)=> setEmail(e.target.value)}/>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password:</label>
                     <input type='password' value={password} name='password' onChange={(e)=> setPassword(e.target.value)}/>
                  </div>     
                  <div className='d-flex ' >      
                   <a className='flex-grow-1 a-link ' href='/forgot'>Forgot Password </a>
                   </div>
                  <div className='submit'>
                     <button className='submit-btn' onClick={()=>login_request()}>Login</button>
                  </div>
            </div>
         </div>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header>
               <Modal.Title>Dikkat!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {message}
            </Modal.Body>
            <Modal.Footer>
               <button onClick={()=> {
                  handleClose();
               }} variant="primary" className='submit-btn'>Anladım</button>
            </Modal.Footer>
         </Modal>  
      </>
   )
}
export default Login;