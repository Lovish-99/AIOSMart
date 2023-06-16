import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import OrderScreen from '../components/shop3/OrderScreen';
import { Container } from 'react-bootstrap';

function OrdeScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <OrderScreen />
        </Container>
        <Footer />
        </>
    )
}

export default OrdeScreen;