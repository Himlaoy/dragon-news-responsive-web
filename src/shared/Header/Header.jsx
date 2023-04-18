import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM, YYYY")}</p>
            </div>
            <div>
                <Button variant="danger">Danger</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;