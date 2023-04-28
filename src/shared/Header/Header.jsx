import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/">Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user ? <Link><Button variant="success">Loguot</Button></Link> : <Link to="/login"><Button variant="success">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;