import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container className='mt-3'>
            <Row>
                {/* 1st column */}
                <Col lg="2" className='d-none d-lg-block'>
                    <LeftSideNav/>
                </Col>
                {/* 2nd Column  */}
                <Col lg="7">
                    <Outlet/>
                </Col>
                {/* 3rd Column  */}
                <Col lg="3">
                    <RightSideNav/>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Main;