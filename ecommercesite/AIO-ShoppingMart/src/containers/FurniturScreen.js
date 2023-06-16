import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import FurnitureScreen from '../components/furniture1/FurnitureScreen';
import { Container } from 'react-bootstrap';

function FurniturScreen () {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <FurnitureScreen />
        </Container>
        <Footer />
        </>
    )
}

export default FurniturScreen ;