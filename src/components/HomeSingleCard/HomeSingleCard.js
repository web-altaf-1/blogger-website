import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, } from 'react-router-dom';
import './HomeSignleCard.css';

const HomeSingleCard = (props) => {
    const { _id, title, content, img, photo } = props.post;

    const navigate = useNavigate();

    const openSingleItem = (id) => {
        navigate(`post/${id}`);

    }

    return (
        <div>
            <Card className='single-card-post' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title ? title : 'No Title'}</Card.Title>
                    <Card.Text>
                        {content.length < 100 ? content : content.slice(0, 100) + '...'}
                    </Card.Text>
                    <Button variant="primary">Read More...</Button>
                </Card.Body>
                <div>
                    <img className='ms-2 my-2' style={{ width: '33px', height: '33px' }} src='https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000' alt="" />
                    {/* <span className='fw-bold ms-2'>{name}</span>  <small>3 Month ago</small> */}
                </div>
            </Card>
            <div className="projcard-container">

                <div className="projcard projcard-blue">
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src={img} />
                        <div className="projcard-textbox">
                            <div className="projcard-title">{title}</div>
                            {/* <div className="projcard-subtitle">This explains the card in more detail</div> */}
                            <div className="projcard-bar"></div>
                            <div title={content.slice(0,400)} className="projcard-description">
                                {content.slice(0, 400)}
                            </div>
                            
                            <div className="projcard-tagbox">
                                <button onClick={() => openSingleItem(_id)} className='btn btn-primary  '>Read More...</button>
                                <span  > <img style={{ width: '36px', height: '36px', borderRadius: '50%' }} className='img-fluid' src={photo} alt="" /></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleCard;