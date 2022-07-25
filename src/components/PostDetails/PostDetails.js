import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is post details {id}</h2>
        </div>
    );
};

export default PostDetails;