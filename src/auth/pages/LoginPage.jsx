import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext( AuthContext );

    const onLogIn = () => {

        login('Alexis');

        navigate('/', {
            replace: true
        })

    }

    return (
        
        <div className="container mt-5">
            <h1>Log out</h1>
            <hr />
            <button className="btn btn-primary" onClick={ onLogIn }>
                Log in
            </button>
        </div>

    )

}
