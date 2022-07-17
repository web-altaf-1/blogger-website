import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css';

const SingleCard = (props) => {
    const {name, content,img} = props.post;
    return (
        <Card className='single-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleCard;