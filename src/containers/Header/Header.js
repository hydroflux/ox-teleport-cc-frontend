import { Link } from 'react-router-dom'
import TeleportLogo from '../../assets/images/teleport-logo.png'
import SearchContainer from '../SearchContainer/SearchContainer'

import './Header.css'

export default function Header({...routerProps}) {
    return (
        <header>
            <Link to="/">
                <img 
                    id="logo"
                    src={ TeleportLogo }
                    alt="logo"
                />
            </Link>
            <SearchContainer {...routerProps}/>
        </header>
    )
}
