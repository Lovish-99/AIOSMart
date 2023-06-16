import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import FurnitureEditScreen from '../components/furniture1/FurnitureEditScreen';
import { Container } from 'react-bootstrap';

function FurnitureEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <FurnitureEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default FurnitureEdiScreen;