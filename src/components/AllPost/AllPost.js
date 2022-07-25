import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import HomeSingleCard from '../HomeSingleCard/HomeSingleCard';
import usePost from '../hooks/usePost';
import Loading from '../Loading/Loading';
import './AllPost.css';

const AllPost = () => {
    const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);
    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div>
            <h2 className='text-center my-3'>Recently</h2>
            <div className='d-flex ' style={{ justifyContent: "space-evenly" }}>
                <div className='' style={{ width: '70%' }}>
                    {
                        posts.map(post => <HomeSingleCard key={post._id} post={post}></HomeSingleCard>)
                    }
                </div>
                <div className='w-25 right-sidebar'>
                    <div className="" style={{ position: 'sticky', top: "0" }}>
                        <div className="card">
                            <h2>About Me</h2>
                            <div className="fakeimg" style={{ height: '100px' }}>Image</div>
                            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        </div>
                        <div className="card">
                            <h3>Popular Post</h3>
                            <div className="fakeimg">Image</div>
                            <br />
                            <div className="fakeimg">Image</div><br />
                            <div className="fakeimg">Image</div>
                        </div>

                        <div className="card">
                            <h3>Follow Me</h3>
                            <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};






export default AllPost;