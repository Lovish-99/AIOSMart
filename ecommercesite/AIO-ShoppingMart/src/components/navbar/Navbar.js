// FUNCTION NAVBAR COMPONENT FOR HEADER OF THE WEBSITE.

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
// import Shop1 from '../shop/main';
import "./Navbar.css";

const Navbaar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <Container>
      <Container>
        <header>
          <Navbar

            expand="lg"
            className="navbar"

            collapseOnSelect
          >
            {/* NAVBAR LOGO CONTAINER */}
            <Container>
              <LinkContainer to="/">
                <div className="logo">
                  <h3>
                    <span>AIO</span>
                    <span>S</span>hopping
                    <span>M</span>art
                  </h3>
                </div>
              </LinkContainer>

              {/* NAVBAR MAIN PAGES */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <LinkContainer to="/">
                    <Nav.Link>
                      <i className="fas fa-home"></i>Home
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/shop3">
                    <Nav.Link>
                      <i className="fas fa-shopping-bag"></i>Shop
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>
                      <i className="fas fa-address-book"></i>Contact
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/cart/">
                    <Nav.Link>
                      <i className="fas fa-shopping-cart"></i>Cart
                    </Nav.Link>
                  </LinkContainer>

                  {/* USER PROFILE CONTAINER */}
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/wishlist/:productName?/:id?">
                        <NavDropdown.Item>WishList</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <i className="fas fa-user"></i>Login
                      </Nav.Link>
                    </LinkContainer>
                  )}

                  {/* ADMIN PROFILE CONTAINER */}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="adminmenue">
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/mobilelist">
                        <NavDropdown.Item>Mobiles</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/appliancelist">
                        <NavDropdown.Item>Appliances</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/clothlist">
                        <NavDropdown.Item>Clothes</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/furniturelist">
                        <NavDropdown.Item>Furniture</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/grocerylist">
                        <NavDropdown.Item>Grocery</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/laptoplist">
                        <NavDropdown.Item>Laptops</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Container>
      {/* <Container>
        <Shop1 />
      </Container> */}
    </Container>
  );
}

export default Navbaar;
