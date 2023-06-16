import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Mobile({mobile}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/mobile/${mobile._id}`}>
                <Card.Img src={mobile.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/mobile/${mobile._id}`}>
                    <Card.Title as='div'>
                        <strong>{mobile.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={mobile.rating} text={`${mobile.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {mobile.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Mobile;
