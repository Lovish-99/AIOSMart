import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Laptop({laptop}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/laptop/${laptop._id}`}>
                <Card.Img src={laptop.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/laptop/${laptop._id}`}>
                    <Card.Title as='div'>
                        <strong>{laptop.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={laptop.rating} text={`${laptop.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {laptop.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Laptop;
