import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Grocery({grocery}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/grocery/${grocery._id}`}>
                <Card.Img src={grocery.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/grocery/${grocery._id}`}>
                    <Card.Title as='div'>
                        <strong>{grocery.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={grocery.rating} text={`${grocery.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {grocery.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Grocery;
