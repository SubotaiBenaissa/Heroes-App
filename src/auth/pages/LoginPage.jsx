import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogIn = () => {

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
