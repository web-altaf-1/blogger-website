import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import HomeSingleCard from '../HomeSingleCard/HomeSingleCard';
import usePost from '../hooks/usePost';
import Loading from '../Loading/Loading';
import './AllPost.css';

import Pagination from '@mui/material/Pagination';
import { TrendingUp } from '@mui/icons-material';
// or

const AllPost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allPost, setAllPost] = useState([]);
    // const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);

    console.log(page)
    useEffect(() => {
        fetch('http://localhost:5000/post-count')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 8);
                setPageCount(pages)
            });


    }, []);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/posts?page=${page}&size=${8}`)
            .then(res => res.json())
            .then(data => setAllPost(data))
        setIsLoading(false)
    }, [page])


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-center my-3'>Recently</h2>
            <div className='d-flex ' style={{ justifyContent: "space-evenly" }}>
                <div className='' style={{ width: '70%' }}>
                    {
                        allPost.map(post => <HomeSingleCard key={post._id} post={post}></HomeSingleCard>)
                    }
                    <>
                        {
                            <Pagination size="lg" className="d-flex justify-content-center mb-5" count={pageCount}
                                onChange={(event, value) => setPage(value)}
                                color="primary" />

                        }
                    </>
                </div>
                <div className='w-25 right-sidebar my-4'>
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