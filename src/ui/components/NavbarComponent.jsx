import { Link, NavLink, useNavigate } from 'react-router-dom';   // useNavigate es un custom hook de react router

export const NavbarComponent = () => {

    const navigate = useNavigate();        // Recibe 3 params, el 'to' que es la ruta a la que irá, el replace y el state

    const onLogOut = () => {

        navigate('/login', {
            replace: true
        });

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Alexis
                    </span>
                    <button className="nav-item nav-link btn" onClick={ onLogOut }>
                        Log Out
                    </button>
                </ul>
            </div>
        </nav>
    )
}