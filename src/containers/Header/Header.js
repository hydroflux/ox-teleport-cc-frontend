import { Link } from 'react-router-dom'
import TeleportLogo from '../../assets/images/teleport-logo.png'
import { getSampleCities } from '../../helpers/utilities'
import SearchContainer from '../SearchContainer/SearchContainer'

import './Header.css'

export default function Header({ updateCities, ...routerProps }) {
    return (
        <header>
            <Link to="/">
                <img 
                    id="logo"
                    src={ TeleportLogo }
                    alt="logo"
                    onClick={ () => {
                        getSampleCities().then( updateCities ) 
                    }}
                />
            </Link>
            <SearchContainer updateCities={updateCities} {...routerProps}/>
        </header>
    )
}
