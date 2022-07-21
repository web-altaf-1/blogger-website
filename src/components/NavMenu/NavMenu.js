import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { PopupMenu } from 'react-simple-widgets';
import auth from '../../firebase.init';
import './Navmenu.css';
const NavMenu = () => {
    const [user] = useAuthState(auth);
    return (
        <div id="">
            <div className="text-end">
                <PopupMenu >
                    <img className='ms-4' style={{ width: '33px', height: '33px', borderRadius: '50%', }} src={user ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />

                    <div className="card2 card text-start">
                        <div className="card-body px-4 py-4">
                            <div id="circle-avatar" className="text-center mx-auto mb-4">
                                <h5>K</h5>
                            </div>

                            <h5 className="text-center mb-0">John Doe</h5>
                            <p className="text-center mb-2">jd@gmail.com</p>

                            <hr />

                            <p
                                className="mb-0"
                                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
                            >
                                ROLES
                            </p>
                            <p style={{ fontSize: 12 }}>
                                {["Submitter", "Project manager", "Change control board"].join(
                                    ", "
                                )}
                            </p>

                            <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                            <div
                                className="list-group list-group-flush"
                                style={{ margin: "0 -24px 0" }}
                            >
                                <button className="list-group-item list-group-item-action px-4">
                                    <small>Change Requests</small>
                                </button>
                                <button className="list-group-item list-group-item-action px-4">
                                    <small>Pending Requests</small>
                                </button>
                                <button className="list-group-item list-group-item-action px-4">
                                    <small>Other Requests</small>
                                </button>
                            </div>

                            <hr style={{ margin: "0 -24px 24px" }} />

                            <div className="d-grid">
                                <button className="btn btn-secondary">
                                    <small>Logout</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </PopupMenu>
            </div>
        </div>
    );
};

export default NavMenu;