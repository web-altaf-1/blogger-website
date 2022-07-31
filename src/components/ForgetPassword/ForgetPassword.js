import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './ForgetPassword.css';

const ForgetPassword = () => {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [resetEmail,setResetEmail] = useState('');
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);



    const setForgetEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const email = event.target.value;
        setResetEmail(email);


        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
            document.getElementById('send-link').classList.remove("disabled");
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }

    }

    const handleForgetPassword = () => {
        sendPasswordResetEmail(resetEmail);
        toast('Password Reset Email Send !! Please Check your Email')
    }
    return (
        <div>
            <div className='w-75 text-center mx-auto shadow-lg p-5 my-5 forget-card'>
                <h3 className='text-center'>Don't worry !! You can recover your password</h3>
                <h4 className='text-center'>Please give your <span className='text-primary text-center'>Email Address</span></h4>
                {
                    isValid == false ? <p style={{color:'red',fontSize:'1.4rem'}} className='fw-bold mt-4 '>{message}</p> : <p style={{color:'green',fontSize:'1.4rem'}} className='fw-bold mt-4'>{message}</p>
                }

                <input autoComplete='off' onChange={setForgetEmail} className='text-center w-50 p-2 ' type="email" name="email" id="" />
                <button className='text-center btn btn-primary ms-3 disabled' id='send-link' onClick={handleForgetPassword}>Send Link</button>
            </div>
        </div>
    );
};

export default ForgetPassword;