import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import LaptopHome from '../components/laptops1/main';
import { Container } from 'react-bootstrap';

const Laptop1 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <LaptopHome />
          </Container>
        </main>
        
        <Footer/>
      </>
    );
  };

export default Laptop1;