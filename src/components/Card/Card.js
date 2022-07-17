import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css';

const Card = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className='all-posts'>
            {
                posts.map(post => <SingleCard key={post._id} post={post}></SingleCard>)
            }
        </div>
    );
};

export default Card;