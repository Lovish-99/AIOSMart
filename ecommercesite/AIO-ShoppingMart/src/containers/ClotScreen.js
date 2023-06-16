import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import ClothScreen from '../components/clothes1/ClothScreen';
import { Container } from 'react-bootstrap';

function ClotScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <ClothScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ClotScreen;