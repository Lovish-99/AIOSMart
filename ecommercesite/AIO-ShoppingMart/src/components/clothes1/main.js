import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Row, Col } from 'react-bootstrap';
import Cloth from './Cloth';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts } from '../../actions/clothesActions';
import { useHistory } from 'react-router-dom';

function Clothes1() {
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
            <h1>Clothes Products</h1>
            {loading ? <Loader />
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {products.map(cloth=>(
                            <Col key={cloth._id} sm={12} md={6} lg={4} xl={3}>
                                <Cloth cloth={cloth} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}
export default Clothes1;