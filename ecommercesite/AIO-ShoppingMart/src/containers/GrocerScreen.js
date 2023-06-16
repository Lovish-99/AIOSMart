import React from 'react';
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import GroceryScreen from '../components/grocery1/GroceryScreen';
import { Container } from 'react-bootstrap';

function GrocerScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <GroceryScreen />
        </Container>
        <Footer />
        </>
    )
}

export default GrocerScreen;