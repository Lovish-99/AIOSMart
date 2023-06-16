import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import JewelHome from '../components/grocery1/main';
import { Container } from 'react-bootstrap';

const Grocery1 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <JewelHome />
          </Container>
        </main>
        
        <Footer/>
      </>
    );
  };

export default Grocery1;