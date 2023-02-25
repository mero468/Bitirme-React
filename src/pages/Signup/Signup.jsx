import React from 'react'
import { useState } from 'react';
import "../loginandsignup.css";
import { NavBar } from '../../common/NavBar';
import { useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

   const [name,setName] = useState("");
   const [password,setPassword] = useState("");
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
      if(name.length === 0 || phone.length < 10 || !(validateEmail(email))|| dateofbirth.length <=0 || password.length < 8 ){
         seterror(true);
      }
      else{
         seterror(false);
         var formdata = new FormData();
         formdata.append("email", email.toLowerCase());
         formdata.append("fullname", name);
         formdata.append("password", password);
         formdata.append("phone", phone);
         formdata.append("dateofbirth", dateofbirth);

         var requestOptions = {
         method: 'POST',
         body: formdata,
         redirect: 'follow'
         };

         fetch("http://127.0.0.1:8000/api/auth/register/", requestOptions)
         .then(response => response.text())
         .then(result => {
            const obj = JSON.parse(result);
            if(obj.errors === undefined){
               setMessage("Başarıyla kaydoldunuz, hesabınızı doğrulamak için e-postanızı kontrol edin ve sistemimize giriş yapın.");
               seterror2(false);
            }
            else{
               if('email' in obj.errors){
                  setMessage("Girdiğiniz e-posta daha önce sistemde kayıtlıdır.");
                  seterror2(true);
               }
               else if('phone' in obj.errors){
                  setMessage("Girdiğiniz telefon numarası daha önce sistemde kayıtlıdır.");
                  seterror2(true);
               }
            }
            handleShow();
         }).catch(error => console.log('error', error));

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
               <h2>Hemen Kayıt Olun</h2>
               <div className='Form' >
                  <div className='fullName'>
                     <label htmlFor="fullName">Ad Soyad:</label>
                     <input type='text' value={name} name='fullName' onChange={(e) => handleChange(e)}/>
                     {error && name.length === 0 &&  <span style={{color: "red"}}>{"İsim boş bırakılamaz"}</span>}
                  </div>
                  <div className='email'>
                     <label htmlFor="email">E-posta:</label>
                     <input type='email'  value={email} name='email' onChange={(e)=> setEmail(e.target.value)}/>
                  {error && <>{validateEmail(email) ? <></> :<span style={{color: "red"}}>{"E-posta geçerli değil!"}</span> }</>}
                  </div>
                  <label htmlFor="phone">Cep Telefonu:</label>
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">+90</span>
                     </div>
                     <input type="number"value={phone}     onInput={(e) => {if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10)}}
                         name='phone' onChange={(e)=> setPhone(e.target.value)} className="form-control"  aria-label="Phone" aria-describedby="basic-addon1"/>
                  </div>
                  {error && phone.length < 10 &&  <span style={{color: "red"}}>{"Telefon numarası 10 sayıdan oluşmalıdır"}</span>}

                  <div className='password'>
                     <label htmlFor="password">Şifre:</label>
                     <input type='password' value={password} name='password' onChange={(e)=> setPassword(e.target.value)}/>
                     {error && password.length < 8 &&  <span style={{color: "red"}}>{"Şifre 8 karakterden oluşmalıdır"}</span>}
                  </div>              
                  <div className="date">
                     <label htmlFor="date">Doğum Tarihi:</label>
                     <input type="date"name='date'  value={dateofbirth} max={MaxDate} min={MinDate} onChange={(e)=> setDob(e.target.value)}/>
                     {error && dateofbirth.length <=0 &&  <span style={{color: "red"}}>{"boş bırakılamaz"}</span>}
                  </div>
                  <a className='a-link' href='/login'>Hesabınız var mı? Giriş yapınız!</a>  
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
          <button onClick={()=>handleClose()} className="check-btn">Anladım</button>
        </Modal.Footer>
      </Modal>        
    </>
    )
}

export default Signup;