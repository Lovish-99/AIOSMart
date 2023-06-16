import React, { useEffect } from "react";
import Footer from '../components/footer/footer';
import Navbar from "../components/navbar/Navbar";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Container } from 'react-bootstrap';


function YourWishlist() {
    const { productName, id } = useParams()
    console.log(productName, id)
    console.log( id )

    let location = useLocation()

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        
        if ( id ) {
            dispatch(addToCart( id , qty, productName))
        }
    }, [dispatch, id, qty, productName])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    console.log(cartItems)

    return (
        <>
            <Navbar />
            <hr/>
            <Container >
            <Link to='/shop3' className='btn btn-dark my-3'>Go Back</Link>
            <br/>
            <br/>
                <Row>
                    <Col md={8}>
                       
                        <h1>Wishlist Items</h1>
                        <hr/>
                        {cartItems.length === 0 ? (
                            <Message variant='info'>
                                Your wishlist is empty <Link to='/shop3'>Go Back</Link>
                            </Message>
                        ) : (
                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.category}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/${item.category}/${item.product}`}>{item.name}</Link>
                                            </Col>

                                            <Col md={2}>
                                                Rs. {item.price}
                                            </Col>

                                            <Col md={1}>
                                                <Button
                                                    type='button'
                                                    variant='light'
                                                    onClick={() => removeFromCartHandler(item.product)}
                                                >
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </Col>
                    <br/>
                </Row>
            </Container>
            <br/>
            <br/>
            <Footer />
        </>
    )
}
export default YourWishlist;



