import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from '../mycontents/Home';
import { Skills } from '../mycontents/Skills';
import { Projects } from '../mycontents/Projects';
import { About } from '../mycontents/About';
import { Contact } from '../mycontents/Contact';


export const Header = () => {
    return (
        <div>
        
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ASHAY SUBHASH CHAUDHARI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#/Home">Home</Nav.Link>
                <Nav.Link eventKey={2} href="#/Skills">Skills</Nav.Link>
                <Nav.Link eventKey={2} href="#/Projects">Projects</Nav.Link>
                <Nav.Link eventKey={2} href="#/About">About</Nav.Link>
                <Nav.Link eventKey={2} href="#/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <HashRouter>
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='*' element={<Navigate to='/home'/>}></Route>
            </Routes>
        </HashRouter>
        </div>      
        );
    }
