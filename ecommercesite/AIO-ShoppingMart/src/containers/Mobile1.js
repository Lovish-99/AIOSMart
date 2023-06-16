import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Shop1 from '../components/shop/main';
import MobileHome from '../components/mobiles1/main';
import { Container } from 'react-bootstrap';

const Mobile1 = () => {
    return (
      <>
        <Navbar />
        <Shop1 />
        <main className="py-3">
          <Container>
          <MobileHome />
          </Container>
        </main>
       
        <Footer/>
      </>
    );
  };

export default Mobile1;