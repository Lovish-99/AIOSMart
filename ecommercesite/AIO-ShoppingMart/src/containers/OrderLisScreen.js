import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import OrderListScreen from '../components/shop3/OrderListScreen';
import { Container } from 'react-bootstrap';

function OrderLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <OrderListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default OrderLisScreen;