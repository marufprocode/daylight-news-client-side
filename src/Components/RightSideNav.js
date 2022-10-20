import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../shared/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <Button variant="outline-primary" className='my-1 w-100'><FcGoogle className='me-2'/>Login With Google</Button>
            <Button variant="outline-dark" className='my-1 w-100'> <BsGithub/> Login With GitHub</Button>
            <div className='mt-4'>
                <h5>Find Us on:</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp/> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item><FaTwitch/> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel/>
            </div>
        </div>
    );
};

export default RightSideNav;