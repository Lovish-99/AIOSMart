import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ApplianceListScreen from '../components/appliances1/ApplianceListScreen';
import { Container } from 'react-bootstrap';

function ApplianceLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
        <ApplianceListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default ApplianceLisScreen;