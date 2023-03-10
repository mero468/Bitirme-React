import React from 'react'
import { useState } from 'react';
import "../loginandsignup.css";
import { NavBar } from '../../common/NavBar';
import { useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

   const [name,setName] = useState("");
   const [password,setPassword] = useState("");
   const [confirm_password,setConfirmPassword] = useState("");
   const [email,setEmail] = useState("");
   const [phone,setPhone] = useState("");
   const [dateofbirth,setDob] = useState("");
   const [MinDate,setMinDate] = useState("");
   const [MaxDate,setMaxDate] = useState("");
   const [error,seterror] = useState(false);
   const [error2,seterror2] = useState(false);
   const [show, setShow] = useState(false);
   const [message,setMessage] = useState("");
   let navigate = useNavigate();

   const handleClose = () => {
      if(!error2){
         navigate('/login');
      }
      else{
         setShow(false);
      }
   }
   const handleShow = () => setShow(true);

   useEffect(() => {
      const d = new Date("2010-01-01");
      const e = new Date("1920-01-01");
      setMinDate(moment(e).format('YYYY-MM-DD'));
      setMaxDate(moment(d).format('YYYY-MM-DD'));
   },[]);

   const handleChange = (event) => {
      const result = event.target.value.replace(/[^a-z]/gi, '');
      setName(result);
   };

   const handlesubmission = () =>{
      if(name.length === 0 || phone.length < 10 || !(validateEmail(email))|| dateofbirth.length <=0 || password.length < 8 || password != confirm_password){
         seterror(true);
      }
      else{
         seterror(false);

         // var raw = JSON.stringify({
         //    "email": email.toLowerCase(),
         //    "name": name,
         //    "verified": true,
         //    "birthdate": dateofbirth,
         //    "password": password,
         //    "passwordConfirmation": confirm_password,
         //    "phoneNumber": phone,
         //    "userType": "admin"
         //  });
         console.log(dateofbirth);
         var data = JSON.stringify({
            "email": "ammarkaid321@gmail.com",
            "name": "Serhan",
            "verified": true,
            "birthdate": "2001-12-23",
            "password": "12345678a*",
            "passwordConfirmation": "12345678a*",
            "phoneNumber": "05446092540",
            "userType": "admin"
          });
          console.log(data);

    data = JSON.stringify({
            "email": email.toLowerCase(),
            "name": name,
            "verified": true,
            "birthdate": dateofbirth,
            "password": password,
            "passwordConfirmation": confirm_password,
            "phoneNumber": phone,
            "userType": "admin"
          });
          console.log(data);
         var config = {
           method: 'post',
           maxBodyLength: Infinity,
           url: 'api/users',
           headers: { 
             'Content-Type': 'application/json'
           },
           data : data
         };
         
         axios(config)
         .then(function (response) {
            console.log(JSON.stringify(response.data));
            const mesaj = response.data;
           if(mesaj.index === undefined){
            setMessage("Ba??ar??yla kaydoldunuz, hesab??n??z?? do??rulamak i??in e-postan??z?? kontrol edin ve sistemimize giri?? yap??n.");
            seterror2(false);
            }
            else{
               setMessage("Girdi??iniz e-posta daha ??nce sistemde kay??tl??d??r.");
               seterror2(true);               
            }
            handleShow();
         })
         .catch(function (error) {
            setMessage(error.response.data[0].message)
            seterror2(true);
            handleShow();
         });
         

         // fetch('api/users', requestOptions)
         // .then(response => response.text())
         // .then(result => {
         //    const obj = JSON.parse(result);

         
         // }).catch(error =>{ 
         //    console.log(error);

         // });

      }
   }
   const validateEmail = (email) => {
   return String(email)
     .toLowerCase()
     .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
   };

   return (
    <>
      <NavBar/>
         <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Hemen Kay??t Olun</h2>
               <div className='Form' >
                  <div className='fullName'>
                     <label htmlFor="fullName">Ad Soyad:</label>
                     <input type='text' value={name} name='fullName' onChange={(e) => handleChange(e)}/>
                     {error && name.length === 0 &&  <span style={{color: "red"}}>{"??sim bo?? b??rak??lamaz"}</span>}
                  </div>
                  <div className='email'>
                     <label htmlFor="email">E-posta:</label>
                     <input type='email'  value={email} name='email' onChange={(e)=> setEmail(e.target.value)}/>
                  {error && <>{validateEmail(email) ? <></> :<span style={{color: "red"}}>{"E-posta ge??erli de??il!"}</span> }</>}
                  </div>
                  <label htmlFor="phone">Cep Telefonu:</label>
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">+90</span>
                     </div>
                     <input type="number"value={phone}     onInput={(e) => {if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10)}}
                         name='phone' onChange={(e)=> setPhone(e.target.value)} className="form-control"  aria-label="Phone" aria-describedby="basic-addon1"/>
                  </div>
                  {error && phone.length < 10 &&  <span style={{color: "red"}}>{"Telefon numaras?? 10 say??dan olu??mal??d??r"}</span>}

                  <div className='password'>
                     <label htmlFor="password">??ifre:</label>
                     <input type='password' value={password} name='password' onChange={(e)=> setPassword(e.target.value)}/>
                     {error && password.length < 8 &&  <span style={{color: "red"}}>{"??ifre 8 karakterden olu??mal??d??r"}</span>}
                  </div>
                  <div className='password'>
                     <label htmlFor="confirmpassword">Tekrar ??ifre:</label>
                     <input type='text' value={confirm_password} name='confirmpassword' onChange={(e)=> setConfirmPassword(e.target.value)}/>
                     {error && (confirm_password.length < 8 ||  password != confirm_password) && <span style={{color: "red"}}>{"??ifre 8 karakterden olu??mal??d??r"}</span>}
                  </div>                  
                  <div className="date">
                     <label htmlFor="date">Do??um Tarihi:</label>
                     <input type="date"name='date'  value={dateofbirth} max={MaxDate} min={MinDate} onChange={(e)=> setDob(e.target.value)}/>
                     {error && dateofbirth.length <=0 &&  <span style={{color: "red"}}>{"bo?? b??rak??lamaz"}</span>}
                  </div>
                  <a className='a-link' href='/login'>Hesab??n??z var m??? Giri?? yap??n??z!</a>  
                  <div className='submit'>
                     <button className='submit-btn' onClick={(e)=>handlesubmission()}>Register Me</button>
                  </div>
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
          <button onClick={()=>handleClose()} className="check-btn">Anlad??m</button>
        </Modal.Footer>
      </Modal>        
    </>
    )
}

export default Signup;