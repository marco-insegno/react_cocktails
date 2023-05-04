import React from 'react'
import './styles/navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyCrack, faPeopleGroup, faComment, faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from './SocialIcons';


function Navigation() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className='navbar-custom'>
                <Container>

                    <Link to='/' className='nav-link' href="#">
                        <Navbar.Brand>
                            <img
                                src="/logo.png"
                                height="30"
                                className="d-inline-block align-top rounded-end"
                                alt="WikiDrinks logo"
                            />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto my-4 my-lg-0 d-flex align-items-center">


                            <Link to='/' className='nav-link' href="#">
                                <FontAwesomeIcon className='me-2' icon={faHouseChimneyCrack} />
                                Home
                            </Link>



                            <Link to='/cocktails' className='nav-link' href="#">
                                <FontAwesomeIcon className='me-2' icon={faMartiniGlassCitrus} />
                                Cocktails
                            </Link>



                            <Link to='/about' className='nav-link' href="#">
                                <FontAwesomeIcon className='me-2' icon={faPeopleGroup} />
                                About
                            </Link>



                            <Link to='/contact' className='nav-link' href="#">
                                <FontAwesomeIcon className='me-2' icon={faComment} />
                                Contact
                            </Link>

                        </Nav>

                        <Nav className='d-flex flex-row justify-content-evenly mt-5 mt-lg-0 mb-4 mb-lg-0 '>
                            <SocialIcons />
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation