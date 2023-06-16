//CONTACT-FORM COMPONENT OF THE WEBSITE
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { contact } from "../../actions/userActions";
import "./contact.css";

function Form2() {
  let location = useLocation();
  let history = useHistory();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    history.push(`/contact`);
  }, [history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contact(name, number, message));
    history.push('/');
  };

  return (
    // CONTACT FORM -MAIN-CONTAINER
    <div class="containerr">
      <span class="big-circlee"></span>

      <div class="form">
          {/* INFORMATION- SUB CONTAINER */}
        <div class="contact-infoo">
          <h3 class="titlee">Let's get in touch</h3>
          <p class="textt">All In One Shopping Mart</p>

          <div class="infoo">
            <div class="informationn">
              <img src="img/location.png" class="iconn" alt="" />
              <p>Aligarh UttarPradesh</p>
            </div>
            <div class="informationn">
              <img src="img/email.png" class="iconn" alt="" />
              <p>aioShop@gmail.com</p>
            </div>
            <div class="informationn">
              <img src="img/phone.png" class="iconn" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-mediaa">
            <p>Connect with us :</p>
            <div class="social-iconss">
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target='_blank' rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/signup" target='_blank' rel="noreferrer">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-formm">
          <span class="circlee one"></span>
          <span class="circlee two"></span>
            {/* CONTACT-FORM-CONTAINER */}
          <div class="login-container">
            <div class="centeer">
              <h1>Contact Us</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name" class="login-input">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="number" class="login-input">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter number"
                    maxLength="10"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="message" class="login-input">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <input type="submit" value="Send" class="submit-inpuut" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form2;
