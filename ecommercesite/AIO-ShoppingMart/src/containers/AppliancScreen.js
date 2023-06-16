import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import ApplianceScreen from '../components/appliances1/ApplianceScreen';
import { Container } from 'react-bootstrap';

function AppliancScreen() {
    return (
        <>
        <Navbar />
        <hr/>
        <Container>
        <ApplianceScreen />
        </Container>
        <Footer />
        </>
    )
}

export default AppliancScreen;