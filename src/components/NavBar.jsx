import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import "./navbar.css"
export const NavBar = () => {

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
     <Navbar expand='sm'>
      <Container fluid>
        <Navbar.Brand className='logo' href="#home">NFT Tickets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <ul className='zebby'>
              <li>
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
              </li>
            </ul>
            </Nav>
            <Nav>
            <ButtonToolbar aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-3" aria-label="First group">
              <Button className="signup" variant="outline-dark" href='/signup'>Signup</Button>
            </ButtonGroup>
            <ButtonGroup className="me-3"aria-label="First group">
              <Button className='login' href="/login">Login</Button>
            </ButtonGroup>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
