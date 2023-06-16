import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import PaymentScreen from '../components/shop3/PaymentScreen';
import { Container } from 'react-bootstrap';

function PaymenScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <PaymentScreen />
        </Container>
        <Footer />
        </>
    )
}

export default PaymenScreen;