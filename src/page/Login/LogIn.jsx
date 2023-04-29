import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {

    const {signInUser} = useContext(AuthContext)

    const signInHandler =(event)=>{
        event.preventDefault()
        const from = event.target
        const email = from.email.value
        const password = from.password.value

        console.log(email, password)


    }


    return (
        <Container className='w-25 mx-auto '>
            <h2 className=''>Please Login</h2>
            <Form onSubmit={signInHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='name' required placeholder="Enter name" />
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