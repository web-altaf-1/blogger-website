import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    let errorMessege;
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        toast('Please Login At First')
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (user?.email == 'web.altaf.1@gmail.com') {
        return children;
    }
    if(user?.email == 'admin@samia.com'){
        return children ;
    }
    if(user?.email == 'admin@altaf.com'){
        return children ;
    }
    else {
        toast(`You can not access Admin Panel `)
        return <Navigate to="/" state={{ from: location }} replace></Navigate>;
    }
};

export default RequireAdmin;