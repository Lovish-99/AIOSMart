import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Row, Col } from 'react-bootstrap';
import Grocery from './Grocery';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts } from '../../actions/groceryActions';
import { useHistory } from 'react-router-dom';

function Grocery1() {
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
            <h1>Grocery Products</h1>
            {loading ? <Loader />
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {products.map(grocery=>(
                            <Col key={grocery._id} sm={12} md={6} lg={4} xl={3}>
                                <Grocery grocery={grocery} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}
export default Grocery1;