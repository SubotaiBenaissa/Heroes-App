import React from 'react'
import { HeroesComponent } from '../components/'

export const MarvelPage = () => {

    return (
        
        <>
            <h1 className="mt-4">Marvel Comics</h1>
            <hr />
            <HeroesComponent publisher={'Marvel Comics'}/>
        </>

    )

}
