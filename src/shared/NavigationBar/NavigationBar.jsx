import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const LoginOut = ()=>{
        logOut()
        .then( )
        .catch(error=>console.log(error.message))
    }

    return (
        <div>
            <Container>
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
                                {user ? <Link><Button onClick={LoginOut} variant="success">Loguot</Button></Link> : <Link to="/login"><Button variant="success">Login</Button></Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;