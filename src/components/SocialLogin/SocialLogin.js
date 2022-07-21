import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;
    let user1 = null ;

    // if(loading || loading1){
    //     return <Loading></Loading>
    // }

    // if (error || error1) {
    //     errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    // }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;