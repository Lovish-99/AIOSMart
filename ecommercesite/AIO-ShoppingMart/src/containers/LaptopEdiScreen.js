import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import LaptopEditScreen from '../components/laptops1/LaptopEditScreen';
import { Container } from 'react-bootstrap';

function LaptopEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <LaptopEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default LaptopEdiScreen;