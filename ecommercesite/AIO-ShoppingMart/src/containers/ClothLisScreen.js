import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ClothListScreen from '../components/clothes1/ClothListScreen';
import { Container } from 'react-bootstrap';

function ClothLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ClothListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ClothLisScreen;