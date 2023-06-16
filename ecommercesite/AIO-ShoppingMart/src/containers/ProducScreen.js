import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import ProductScr from '../components/shop3/ProductScreen';
import { Container } from 'react-bootstrap';

function ProducScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
            <ProductScr />
        </Container>
        <Footer />
        </>
    )
}

export default ProducScreen;
