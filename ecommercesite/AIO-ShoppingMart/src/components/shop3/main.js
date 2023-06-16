import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from './Product';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts } from '../../actions/productActions';
import { useHistory } from 'react-router-dom';

function Shop3() {


    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    let history = useHistory()
    let keyword = history.location.search
    console.log(keyword)
    useEffect(() => {

        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <Container>
                <h1>Latest Products</h1>
            </Container>
            {loading ? <Loader />
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default Shop3;
