import React from 'react'
import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   let navigate = useNavigate();

   // const login_request = () =>{
   //    var formdata = new FormData();
   //    formdata.append("email", email);
   //    formdata.append("password", password);

   //    var requestOptions = {
   //    method: 'POST',
   //    body: formdata,
   //    redirect: 'follow'
   //    };

   //    fetch("http://127.0.0.1:8000/api/auth/login/", requestOptions)
   //    .then(response => response.text())
   //    .then(result => {
   //       const obj = JSON.parse(result);
   //       console.log(obj);
   //       if('detail' in obj){
   //          const temp = obj.detail;
   //          if(temp.includes("Email")){
   //             setMessage("E-posta kimliği doğrulanmadı!");
   //          }
   //          else{
   //             setMessage("Geçersiz kimlik bilgileri, tekrar deneyin!");
   //          }
   //          handleShow();
   //       }
   //       else{
   //          localStorage.setItem('access-token',obj.tokens.access);
   //          localStorage.setItem('refresh-token',obj.tokens.refresh);
   //          localStorage.setItem('email',obj.email);
   //          navigate('/');
   //       }
   //    })
   //    .catch(error => console.log('error', error));
   // }
   const [password,setPassword] = useState("");
   const [email,setEmail] = useState("");
   const [message,setMessage] = useState("");
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
         <>
         <NavBar/>
         <div className="wrapper">
            <div className='form-wrapper'>
               <h2>Signup </h2>
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
                     <button className='submit-btn'>Login</button>
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
               }} variant="primary">Anladım</button>
            </Modal.Footer>
         </Modal>  
      </>
   )
}
export default Login;