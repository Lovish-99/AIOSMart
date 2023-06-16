import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../shop3/Rating';
import { Link } from 'react-router-dom';

function Appliance({appliance}) {
    return (
        // style={{ maxHeight: '500px' }
        // style={{ maxHeight: '400px' }
        <Card className="my-3 p-3 rounded">
            <Link to={`/appliance/${appliance._id}`}>
                <Card.Img src={appliance.image} ></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/appliance/${appliance._id}`}>
                    <Card.Title as='div'>
                        <strong>{appliance.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={appliance.rating} text={`${appliance.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    Rs. {appliance.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Appliance;
