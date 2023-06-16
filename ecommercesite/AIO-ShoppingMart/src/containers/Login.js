import React from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';
import Log from '../components/login/login';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
      <>
      <Navbar/>
      <hr/>
      <Container>
      <Log/>
      </Container>
      <Footer/>
      </>
    );
  };

export default Login;