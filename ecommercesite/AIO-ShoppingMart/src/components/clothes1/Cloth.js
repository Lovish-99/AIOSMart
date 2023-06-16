import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Cloth({cloth}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/cloth/${cloth._id}`}>
                <Card.Img src={cloth.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/cloth/${cloth._id}`}>
                    <Card.Title as='div'>
                        <strong>{cloth.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={cloth.rating} text={`${cloth.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {cloth.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cloth;
