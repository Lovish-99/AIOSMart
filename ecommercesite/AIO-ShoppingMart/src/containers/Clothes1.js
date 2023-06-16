import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import ClothHome from '../components/clothes1/main';
import { Container } from 'react-bootstrap';

const Clothes1 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <ClothHome />
          </Container>
        </main>
        <Footer/>
      </>
    );
  };

export default Clothes1;