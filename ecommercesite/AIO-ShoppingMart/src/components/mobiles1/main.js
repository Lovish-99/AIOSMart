import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Row, Col } from 'react-bootstrap';
import Mobile from './Mobile';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts } from '../../actions/mobileActions';
import { useHistory } from 'react-router-dom';

function Mobile1() {
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
            <h1>Mobile Products</h1>
            {loading ? <Loader />
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {products.map(mobile=>(
                            <Col key={mobile._id} sm={12} md={6} lg={4} xl={3}>
                                <Mobile mobile={mobile} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}
export default Mobile1;