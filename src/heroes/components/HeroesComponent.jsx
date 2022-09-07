import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroesComponent = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                { 
                    heroes.map( (hero) => (
                        <HeroCard key={ hero.id } { ...hero } />         
                    ) )      
                }             {/* Se usa es operador spread para mandar todos los datos de hero a las props de HeroCard */}
            </div>
        </>

    )

}
