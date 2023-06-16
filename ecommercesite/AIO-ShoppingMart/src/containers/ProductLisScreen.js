import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ProductListScreen from '../components/shop3/ProductListScreen';
import { Container } from 'react-bootstrap';

function ProductLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ProductListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ProductLisScreen;