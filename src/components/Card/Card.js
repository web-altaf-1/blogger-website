import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePost from '../hooks/usePost';
import Loading from '../Loading/Loading';
import PreLoader from '../PreLoader/PreLoader';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css';

const Card = () => {
    const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);
    if(isLoading){
        
        return <Loading></Loading>
    }

    
    return (
        <div className='all-posts my-3'>

            {
                posts.slice(0, 3).map(post => <SingleCard key={post._id} post={post}></SingleCard>)
            }
        </div>
    );
};

export default Card;