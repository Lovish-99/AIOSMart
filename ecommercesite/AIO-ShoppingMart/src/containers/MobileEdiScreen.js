import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import MobileEditScreen from '../components/mobiles1/MobileEditScreen';
import { Container } from 'react-bootstrap';

function MobileEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <MobileEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default MobileEdiScreen;