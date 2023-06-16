import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Form from '../components/contact/Form';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
      <>
        <Navbar />
        <hr/>
        <Container>
        <Form/>
        </Container>
        <Footer/>
      </>
    );
  };

export default Contact;