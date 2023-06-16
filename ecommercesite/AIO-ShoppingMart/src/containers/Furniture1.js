import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import CamHome from '../components/furniture1/main';
import { Container } from 'react-bootstrap';
const Furniture1 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <CamHome />
          </Container>
        </main>
        
        <Footer/>
      </>
    );
  };

export default Furniture1;