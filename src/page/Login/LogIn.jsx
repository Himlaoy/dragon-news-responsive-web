import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {

    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    console.log(location)

    const signInHandler =(event)=>{

        event.preventDefault()
        const form= event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

       signInUser(email, password)
       .then(result=>{
        const loggedUser = result.user
        navigate(from, {replace:true})
        console.log(loggedUser)
       })
       .catch(error=>console.log(error.message))

    }


    return (
        <Container className='w-25 mx-auto '>
            <h2 className=''>Please Login</h2>
            <Form onSubmit={signInHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Don't have an account please <Link to="/register">Register</Link></p>
                </Form.Group>
            </Form>

        </Container>
    );
};

export default LogIn;