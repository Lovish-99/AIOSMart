import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import PlaceOrderScreen from '../components/shop3/PlaceOrderScreen';
import { Container } from 'react-bootstrap';

function PlaceOrdeScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <PlaceOrderScreen />
        </Container>
        <Footer />
        </>
    )
}

export default PlaceOrdeScreen;