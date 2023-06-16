import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import Shophom from '../components/shop3/main';
import { Container } from 'react-bootstrap';

const Shop3 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
            <Shophom />
          </Container>
        </main>
        <Footer/>
      </>
    );
  };

export default Shop3;