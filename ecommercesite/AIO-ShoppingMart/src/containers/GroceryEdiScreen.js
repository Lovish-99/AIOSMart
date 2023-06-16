import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import GroceryEditScreen from '../components/grocery1/GroceryEditScreen';
import { Container } from 'react-bootstrap';

function GroceryEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <GroceryEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default GroceryEdiScreen;