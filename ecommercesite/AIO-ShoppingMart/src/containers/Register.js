import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/Navbar';
import Signup from '../components/signup/signup';
import { Container } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Container>
        <Signup />
      </Container>
      <Footer />
    </>
  );
};

export default Register;