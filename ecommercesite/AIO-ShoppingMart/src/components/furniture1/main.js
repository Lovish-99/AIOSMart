import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Row, Col } from 'react-bootstrap';
import Furniture from './Furniture';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts } from '../../actions/furnitureActions';
import { useHistory } from 'react-router-dom';

function Furniture1() {
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
            <h1>Furniture Products</h1>
            {loading ? <Loader />
                : error ? <Message>{error}</Message>
                    :
                    <Row>
                        {products.map(furniture=>(
                            <Col key={furniture._id} sm={12} md={6} lg={4} xl={3}>
                                <Furniture furniture={furniture} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}
export default Furniture1;