import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import ProfileScreen from '../components/shop3/ProfileScreen';
import { Container } from 'react-bootstrap';

const ProfilScreen = () => {
    return (
      <>
      <Navbar/>
      <hr/>
      <Container>
        <ProfileScreen/>
      </Container>
      <Footer/>
      </>
    );
  };

export default ProfilScreen;