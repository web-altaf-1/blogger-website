import React, { useEffect, useState } from 'react';
import usePost from '../hooks/usePost';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css';

const Card = () => {
    const [posts, setPosts] = usePost();
    return (
        <div className='all-posts my-3'>
            
            {
                posts.map(post => <SingleCard key={post._id} post={post}></SingleCard>)
            }
        </div>
    );
};

export default Card;