import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css';
import notFoundImg from '../../images/img-not-found.png'

const SingleCard = (props) => {
    const {title, content,img ,name} = props.post;
    return (
        <Card className='single-card' style={{ width: '18rem' }}>
            <Card.Img width='245px' height='235px' variant="top" src={img || notFoundImg} />
            <Card.Body>
                <Card.Title>{title? title : 'No Title'}</Card.Title>
                <Card.Text>
                    { content.length < 100 ? content : content.slice(0, 100)+'...'}
                </Card.Text>
                <Button variant="primary">Read More...</Button>
            </Card.Body>
            <div>
                <img className='ms-2 my-2' style={{width:'33px',height:'33px'}} src='https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000' alt="" />
                <span className='fw-bold ms-2'>{name}</span>  <small>3 Month ago</small>
            </div>
        </Card>
    );
};

export default SingleCard;