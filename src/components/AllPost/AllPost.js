import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import HomeSingleCard from '../HomeSingleCard/HomeSingleCard';
import './AllPost.css';

import Pagination from '@mui/material/Pagination';
import Loading from '../Loading/Loading';
// or

const AllPost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allPost, setAllPost] = useState([]);
    const [user] = useAuthState(auth);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {


        fetch('https://sheltered-temple-11409.herokuapp.com/post-count')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 8);
                setPageCount(pages);
            });


    }, []);


    var size = 8;

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://sheltered-temple-11409.herokuapp.com/posts?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllPost(data);
                setIsLoading(false);

            });





    }, [page, size])


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div id='recent-post'>
            <h2 className='text-center my-3'>Recently</h2>
            <div className='d-flex ' style={{ justifyContent: "space-evenly" }}>
                <div className='all-post-container' style={{ width: '70%' }}>
                    {
                        allPost.map(post => <HomeSingleCard key={post._id} post={post}></HomeSingleCard>)
                    }
                    <>
                        {
                            <Pagination size="lg" className="d-flex justify-content-center mb-5" count={pageCount}
                                onChange={(event, value) => {
                                    setPage(value);
                                    document.querySelector('.all-post-container').scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
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