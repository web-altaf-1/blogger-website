import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import usePost from '../hooks/usePost';
import './AdminPanel.css';
const AdminPanel = () => {

    const [posts, setPosts, isLoading] = usePost();
    const [user] = useAuthState(auth);
    return (
        <div>
            <div>
                <h4 className='text-center mt-2'>Admin Email : {user?.email}</h4>
            </div>
            <div className="table my-3 container">
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
                                    // onClick={() => removeItem(car._id)}
                                    // className="remove"
                                    >
                                        X
                                    </button>

                                </td>
                                <td>
                                    <button
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