import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ErrorElement = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();
    return (
        <div className='text-center mt-12'>
            <p>Something went wrong</p>
            <p className="text-2xl">{error.status} {error.data.sorry}</p>
            <p>please <button onClick={logOut}>Log Out </button> and Log in back...</p>
        </div>
    );
};

export default ErrorElement;