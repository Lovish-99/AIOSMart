import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import ApplianceHome from '../components/appliances1/main';
import { Container } from 'react-bootstrap';

const Appliances = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <ApplianceHome />
          </Container>
        </main>
        <Footer/>
      </>
    );
  };

export default Appliances;