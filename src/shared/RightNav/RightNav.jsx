import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <Button variant="primary"> <FaFacebook></FaFacebook> Login with Facebook</Button>
            <Button variant="secondary"><FaGoogle></FaGoogle>Login with Google</Button>

            <div>
                <h2>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Tweeter</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
                <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default RightNav;