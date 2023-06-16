import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import UserListScreen from '../components/shop3/UserListScreen';
import { Container } from 'react-bootstrap';

function UserLisScreen() {
    return (
        <>
        <Navbar />
        <Container>
            <UserListScreen />
        </Container>
        <Footer />
        </>
    )
}

export default UserLisScreen;