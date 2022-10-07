import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import usePost from '../hooks/usePost';
import PreLoader from '../PreLoader/PreLoader';
import './AdminPanel.css';

const AdminPanel = () => {

    const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);

    // delete a post 

    const removePost = (id) => {
        const procced = window.confirm('Do you want to remove this post ??');
        if (procced) {
            console.log('deleting user id', id);
            const url = `https://sheltered-temple-11409.herokuapp.com/delete-post/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = posts.filter(post => post._id !== id);
                        toast('Post deleted successfully !! ')
                        setPosts(remaining);
                    }
                })
        }
    }

    if (isLoading) {
        return <PreLoader></PreLoader>
    }

    return (
        <div className='admin-panel-container'>
            <h3 className='admin-panel-title'>Manage All Post : {posts.length} </h3>
            <div className="table my-3 container admin-panel-content shadow-lg">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Post id</th>
                            <th>Post Image</th>
                            <th>Name</th>
                            <th>Gmail</th>
                            <th>User Photo</th>
                            <th>Post Title</th>
                            <th>Time</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody className="align-middle">
                        {posts.map((post) => (
                            <tr key={post._id}>
                                <td title={post._id}>{post._id?.slice(0, 6)}</td>
                                <td>
                                    {
                                        post.img ? <img src={post.img} width='50px' height="50px" alt="" /> : "No Image"
                                    }
                                </td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td><img style={{ width: '32px', height: '32px', borderRadius: '50%' }} src={post.photo} alt="user_photo" /></td>
                                <td>{post.title}</td>
                                <td>{post.time?.slice(0, 10)}</td>
                                <td>
                                    <button
                                        onClick={() => removePost(post._id)}
                                        className="admin-remove-post-button"
                                    >
                                        X
                                    </button>

                                </td>
                                <td>
                                    <button className='admin-post-update-button'
                                    // onClick={() => handleItemUpdate(car._id)}
                                    >Update</button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    );
};

export default AdminPanel;