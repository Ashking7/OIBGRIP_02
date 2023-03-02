import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <Navbar className='mynav' expand="lg" variant="dark" bg="primary" fixed='bottom'>
      <Container>
        <Navbar.Brand className='offset-5' href="#">&copy; 2023 All rights reserved </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
