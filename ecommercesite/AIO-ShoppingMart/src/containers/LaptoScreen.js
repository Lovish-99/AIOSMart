import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import LaptopScreen from '../components/laptops1/LaptopScreen';
import { Container } from 'react-bootstrap';

function LaptoScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <LaptopScreen />
        </Container>
        <Footer />
        </>
    )
}

export default LaptoScreen;
