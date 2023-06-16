import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import MobileListScreen from '../components/mobiles1/MobileListScreen';
import { Container } from 'react-bootstrap';

function MobileLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <MobileListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default MobileLisScreen;