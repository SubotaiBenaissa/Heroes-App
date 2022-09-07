import React from 'react'
import { HeroesComponent } from '../components/'

export const DcPage = () => {

    return (
        
        <>
            <h1 className="mt-4">DC Comics</h1>
            <hr />
            <HeroesComponent publisher={'DC Comics'}/>
        </>

    )

}
