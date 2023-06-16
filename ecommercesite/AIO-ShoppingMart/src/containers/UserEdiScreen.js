import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import UserEditScreen from '../components/shop3/UserEditScreen';
import { Container } from 'react-bootstrap';

function UserEdiScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <UserEditScreen />
        </Container>
        <Footer />
        </>
    )
}

export default UserEdiScreen;