import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import FurnitureListScreen from '../components/furniture1/FurnitureListScreen';
import { Container } from 'react-bootstrap';

function FurnitureLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <FurnitureListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default FurnitureLisScreen;