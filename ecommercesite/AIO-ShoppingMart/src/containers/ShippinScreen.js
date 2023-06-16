import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ShippingScreen from '../components/shop3/ShippingScreen';
import { Container } from 'react-bootstrap';

function ShippinScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
            <ShippingScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ShippinScreen;