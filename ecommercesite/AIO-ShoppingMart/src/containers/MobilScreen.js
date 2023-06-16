import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import MobileScreen from '../components/mobiles1/MobileScreen';
import { Container } from 'react-bootstrap';

function MobilScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <MobileScreen />
        </Container>
        <Footer />
        </>
    )
}

export default MobilScreen;
