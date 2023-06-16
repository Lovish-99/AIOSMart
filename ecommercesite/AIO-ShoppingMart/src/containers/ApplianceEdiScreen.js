import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ApplianceEditScreen from '../components/appliances1/ApplianceEditScreen';
import { Container } from 'react-bootstrap';

function ApplianceEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ApplianceEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ApplianceEdiScreen;