import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const usePost = () => {

    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    


    useEffect(()=>{
        setIsLoading(true);
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))

        
        setIsLoading(false);
    },[])

    


    return [posts,setPosts ,isLoading]
};

export default usePost;