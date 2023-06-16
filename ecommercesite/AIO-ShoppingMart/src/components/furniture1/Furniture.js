import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Furniture({furniture}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/furniture/${furniture._id}`}>
                <Card.Img src={furniture.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/furniture/${furniture._id}`}>
                    <Card.Title as='div'>
                        <strong>{furniture.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={furniture.rating} text={`${furniture.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {furniture.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Furniture;
