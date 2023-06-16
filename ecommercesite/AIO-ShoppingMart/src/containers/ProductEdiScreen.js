import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ProductEditScreen from '../components/shop3/ProductEditScreen';
import { Container } from 'react-bootstrap';

function ProductEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ProductEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ProductEdiScreen;