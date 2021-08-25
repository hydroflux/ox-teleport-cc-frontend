import { Link } from 'react-router-dom'
import TeleportLogo from '../../assets/images/teleport-logo.png'
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
                />
            </Link>
            <SearchContainer updateCities={updateCities} {...routerProps}/>
        </header>
    )
}
