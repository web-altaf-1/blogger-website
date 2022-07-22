import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import HomeSingleCard from '../HomeSingleCard/HomeSingleCard';
import usePost from '../hooks/usePost';
import Loading from '../Loading/Loading';

const AllPost = () => {
    const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);
    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2>Recently</h2>
            <div>
                {
                    posts.map(post => <HomeSingleCard key={post._id} post={post}></HomeSingleCard>)
                }
            </div>
        </div>

    )
};






export default AllPost;