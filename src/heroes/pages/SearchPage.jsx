import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByLink } from '../helpers'

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();        // Otro hook de react router dom que permite saber la ubicación de la url en que se está
    const { q = '' } = queryString.parse( location.search ); 
    const heroes = getHeroByLink( q );

    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 ) && ( heroes.length === 0 );

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchHero = (event) => {
        event.preventDefault();
        navigate(`?q=${ searchText }`)
    }

    return (
        
        <>
            <h1 className="mt-4">Search</h1>
            <hr />
            <div className="row mt-4 animate__animated animate__fadeIn">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchHero }>
                        <input 
                            type="text" 
                            placeholder="Search a hero" 
                            className="form-control" 
                            name="searchText" 
                            autoComplete="off" 
                            value={ searchText } 
                            onChange={ onInputChange }
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
                        No results with <b>{ q }</b>
                    </div>

                    {
                        heroes.map( (hero) => (
                            <HeroCard key={ hero.id } {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
        
    )

}
