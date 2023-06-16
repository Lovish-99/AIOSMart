import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ClothEditScreen from '../components/clothes1/ClothEditScreen';
import { Container } from 'react-bootstrap';

function ClothEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ClothEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ClothEdiScreen;