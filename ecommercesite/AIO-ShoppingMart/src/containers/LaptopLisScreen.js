import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import LaptopListScreen from '../components/laptops1/LaptopListScreen';
import { Container } from 'react-bootstrap';

function LaptopLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <LaptopListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default LaptopLisScreen;