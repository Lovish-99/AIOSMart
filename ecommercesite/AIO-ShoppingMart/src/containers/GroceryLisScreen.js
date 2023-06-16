import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import GroceryListScreen from '../components/grocery1/GroceryListScreen';
import { Container } from 'react-bootstrap';

function GroceryLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <GroceryListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default GroceryLisScreen;