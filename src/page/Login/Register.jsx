import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='w-25 mx-auto '>
                <h2>Please Register</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='Photo' required placeholder="Photo URL" />
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
                        <p>Already have an account please <Link to="/login">Login</Link></p>
                    </Form.Group>
                </Form>

            </Container>
        </div>
    );
};

export default Register;