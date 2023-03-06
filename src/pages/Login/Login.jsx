import React from 'react'
import { useState } from 'react';
import { NavBar } from '../../common/NavBar';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   let navigate = useNavigate();

   const login_request = () =>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "email": "ammarkaid321@gmail.com",
        "password": "12345678a*"
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://www.bitirmetezi-374506.oa.r.appspot.com/api/sessions", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      // };
      // let status = 0;
      // fetch("www.bitirmetezi-374506.oa.r.appspot.com/api/sessions", requestOptions)
      //    .then(response => {
      //       status = response.status;
      //       console.log(status)
      //       if(status == 200){
      //          // localStorage.setItem('access-token',result.accessTsoken);
      //          // localStorage.setItem('refresh-token',result.refreshToken);
      //          // localStorage.setItem('email',result.email);
      //          navigate('/');
      //       }
      //       else{
      //          setMessage("Invalid email or password")
      //          handleShow();
      //       }
      //    })
      //    .then(result => {

      // })
      // .catch(error => console.log('error', error));
   }
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
               }} variant="primary">Anladım</button>
            </Modal.Footer>
         </Modal>  
      </>
   )
}
export default Login;