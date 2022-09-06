import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavbarComponent } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {

    return (
        
        <>
            <NavbarComponent />
            <div className="container">
                <Routes>
                    <Route path='marvel' element={ <MarvelPage /> }/>
                    <Route path='dc' element={ <DcPage /> } />
                    <Route path='search' element={ <SearchPage /> } />
                    <Route path='hero' element={ <HeroPage /> }/>
                    <Route path='/' element={ <Navigate to='/marvel'/> } />
                </Routes>
            </div>
        </>

    )

}
