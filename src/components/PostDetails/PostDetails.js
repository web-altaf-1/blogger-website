import React, { useEffect, useReducer, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import PreLoader from '../PreLoader/PreLoader';
import './PostDetails.css';
const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [user] = useAuthState(auth);

    window.scroll(0,0)

    useEffect(() => {
        setIsLoading(true)
        const url = `http://localhost:5000/posts/${id}`;
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            
        })
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setIsLoading(false);
            });
        
    }, []);


    if (isLoading == true) {
        return <PreLoader></PreLoader>
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const text = event.target.comment.value;

        const comment = { comment: text, _id: post._id, name: user.displayName, photoURL: user.photoURL ? user.photoURL : 'http://askcreationbd.com/storage/teams/April2021/ZgLb5hDBpQjajVK20Pl5.png' };
        console.log(comment);



    };

    return (
        <div>


            <div className="container">
                <div className="row">


                    <div style={{ textAlign: 'start', borderRight: '1px solid #ddd' }} className="col-md-2 col-xs-12 mt-3">
                        <div className="share">

                            <ul>
                                <li style={{ textAlign: 'start' }}>
                                    <p>Home Page</p>
                                </li>
                                <li style={{ textAlign: 'start' }}>
                                    <p>Type a Comment </p>
                                </li>
                            </ul>
                            <div className="sep">
                            </div>

                            <ul>
                                <li style={{ textAlign: 'start' }}>
                                    <p>Create a New Blog Post</p>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="col-md-8 col-md-offset-2 col-xs-12">
                        <div className="mainheading">


                            <div className="row post-top-meta">
                                <div className="col-md-2">
                                    <a ><img className="author-thumb" src={post?.photo ? post?.photo : 'http://askcreationbd.com/storage/teams/April2021/ZgLb5hDBpQjajVK20Pl5.png'} alt="Author_photo" /></a>
                                </div>
                                <div className="col-md-10">
                                    <h4 className="link-dark" href="">{post.name ? post.name : 'Unknown User'}</h4>

                                </div>
                            </div>


                            <h1 className="posttitle">{post.title ? post.title : 'There is no post Title'}</h1>

                        </div>


                        <img className="featured-image img-fluid" src="assets/img/demopic/10.jpg" alt="" />



                        <div style={{ minHeight: '30vh' }} className="article-post">
                            <p>
                                {post.content ? post.content : 'We are extreamly sorry !! This is Empty post'}
                            </p>

                        </div>



                        <div className="after-post-tags shadow p-3">
                            <h5 className='fw-bold '>Leave a comment</h5>
                            <form onSubmit={handleCommentSubmit} className='d-flex  align-items-center'>
                                <textarea className='p-2' style={{ fontSize: '1.2rem' }} name="comment" id="" cols="40" rows="3"></textarea>

                                <input className='p-2 ms-2 btn btn-outline-primary' type="submit" value="Post a Comment" />
                            </form>
                            <br />

                        </div>


                    </div>


                </div>
            </div>


        </div>
    );
};

export default PostDetails;