import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './NewPost.css';

const NewPost = () => {
    const [user, loading, error] = useAuthState(auth);

    // const [file, setFile] = useState();

    // const handleChange = (e) => {
    //     const [f] = e.target.files;
    //     setFile(f);
    // };

    // console.log(file);

    const handlePostSubmit = (event) => {
        event.preventDefault();
        const content = event.target.post.value;
        const title = event.target.title.value;
        const img = event.target.photo.value;
        const time = new Date(Date.now());

        const newData = { email: user?.email, photo: user?.photoURL, name: user?.displayName ? user?.displayName : 'Anonymous', title: title, img:img, content: content, time: time }
        console.log(newData);



        const url = `http://localhost:5000/newpost`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }
    return (
        <div className=''>
            <div className='shadow-lg p-5 my-2 w-75 m-auto '>
                <h2 className='text-center text-primary'>Please add a new Post</h2>


                <Form onSubmit={handlePostSubmit} className='post-form'>


                    <Form.Group>
                        <Form.Control name='photo' className='mb-2 rounded' type="text" placeholder="Enter a Photo URL" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name='title' className='mb-2 rounded' type="text" placeholder="Enter Post Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <textarea className='p-2' name='post' style={{ height: '50vh', width: '100%' }} type="text" placeholder="Create a New Post" />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default NewPost;