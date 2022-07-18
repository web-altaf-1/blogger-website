import React, { useEffect, useState } from 'react';

const usePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return [posts,setPosts]
};

export default usePost;