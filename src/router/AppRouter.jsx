import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

    return (
        
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='/*' 
                element={ 
                <PrivateRoute>
                    <Route path='/*' element={ <HeroesRoutes /> } />
                </PrivateRoute> 
                } />            
            </Routes>
        </>

    )

}
