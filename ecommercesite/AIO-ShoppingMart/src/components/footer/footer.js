import React from "react";
import "./footer.css";

// Footer Component for the website.
const Footer = () => {
  return (
    <>
      <footer class="text-center text-lg-start bg-light text-muted text-size ">
        {/* FOOTER-MAIN SECTION */}

        <section class="section" style={{ color: "black" }}>
          {/* FOOTER-SOCIAL-NETWORK-SECTION */}
          <section
            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            style={{ backgroundColor: "#C26DBC", color: "black" }}
          >
            <div class="me-5 d-none d-lg-block footer">
              <span class="head-size social-text">
                Get connected with us on social networks:
              </span>
            </div>

            <div>
              <a href="www.facebook.com" class="me-4 text-reset social-text">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="www.twitter.com" class="me-4 text-reset social-text">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="www.instagram.com" class="me-4 text-reset social-text">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="www.linkedin.com" class="me-4 text-reset social-text">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="www.github.com" class="me-4 text-reset social-text">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>

          {/* FOOTER-SUB-MAIN-SECTION */}
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 head-size">
                  <i class="fas fa-gem me-3 head-size"></i>AIO SHOPPING MART
                </h6>
                <p>
                  A GREAT ECOMMERCE WEBSITE FOR A BUSINESS TO CUSTOMER DEAL !!!
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 head-size">Products</h6>
                <p>
                  <a href="/mobile1" class="text-reset">
                    Mobiles
                  </a>
                </p>
                <p>
                  <a href="/laptop1" class="text-reset">
                    Laptops
                  </a>
                </p>
                <p>
                  <a href="/clothes1" class="text-reset">
                    Clothes
                  </a>
                </p>
                <p>
                  <a href="/appliances" class="text-reset">
                    Appliances
                  </a>
                </p>
                <p>
                  <a href="/grocery1" class="text-reset">
                    Grocery
                  </a>
                </p>
                <p>
                  <a href="furniture1" class="text-reset">
                    Furnitures
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 head-size">
                  Useful links
                </h6>
                <p>
                  <a href="/shop3" class="text-reset">
                    Shop
                  </a>
                </p>
                <p>
                  <a href="/contact" class="text-reset">
                    Contact us
                  </a>
                </p>
                <p>
                  <a href="/cart" class="text-reset">
                    Cart
                  </a>
                </p>
                <p>
                  <a href="/login" class="text-reset">
                    Login
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4 head-size">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>New delhi, India
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  aio@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER-COPYRIGHT-SECTION */}
        <div
          class="text-center p-4 copyright"
          style={{ backgroundColor: "#C26DBC", color: "white" }}
        >
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="/">
            AIO-SHOPPING-MART
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
