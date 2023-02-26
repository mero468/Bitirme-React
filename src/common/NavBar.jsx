import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

import "./navbar.css"
export const NavBar = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }
  

  // var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
  // var rootElement = document.documentElement;
  // function handleScroll() {
  //   // Do something on scroll
  //   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  //   if (rootElement.scrollTop / scrollTotal > 0.8) {
  //     // Show button
  //     scrollToTopBtn.classList.add("showBtn");
  //   } else {
  //     // Hide button
  //     scrollToTopBtn.classList.remove("showBtn");
  //   }
  // }
  // function scrollToTop() {
  //   // Scroll to top logic
  //   rootElement.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }
  // scrollToTopBtn.addEventListener("click", scrollToTop);
  // document.addEventListener("scroll", handleScroll);
  return (
    <>
      <Navbar  expand='sm'>
      <Container style={{position:'absolute'}} fluid>
        <Navbar.Brand className='logo ms-5' href="/">NFT Tickets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            </Nav>
            <Nav>
            <div class="btn-group nav-btn  rounded-pill me-5" role="group" aria-label="Outline example">
                <button type="button" onClick={() => routeChange("/signup")} class="btn leftbtn  btn-outline-primary login"> <i class="fas fa-user fa-sm  me-2"></i> Signup</button>
                <button type="button" onClick={() => routeChange("/login")} class="btn rightbtn btn-outline-primary login"><i class="fas fa-arrow-right fa-xs me-2 "></i> Login</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <div className=' a7a'>
          <div className='search-area container-fluid px-5 '>
            <div class=" row no-gutters bars justify-content-center">
              <div className='col-9 bar'>
                  <div class="input-group mb-3">
                  <input type="text" class="ps-5 form-control search-inpt " placeholder="Search for Event" aria-label="Search for event" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary my-0 search-btn" type="button"><i class="fas fa-search fa-lg fa-fw"></i></button>
                  </div>
                  </div>
              </div>
              <div className='col-3'>
                {/* <div class="input-group mb-3">
                    <input type="text" class=" form-control search-inpt " placeholder="Izmir" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary my-0 search-btn" type="button"><i class="fas fa-search fa-lg fa-fw"></i></button>
                    </div>
                </div> */}
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
