import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { NavbarComponent } from '../ui'

export const AppRouter = () => {

    return (
        
        <>
            <NavbarComponent />
            <Routes>
                <Route path='marvel' element={ <MarvelPage /> }/>
                <Route path='dc' element={ <DcPage /> } />
                <Route path='login' element={ <LoginPage /> } />
                <Route path='/' element={ <Navigate to='/login'/> } />
            </Routes>
        </>

    )

}
