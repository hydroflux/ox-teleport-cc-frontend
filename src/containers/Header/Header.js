import TeleportLogo from '../../assets/images/teleport-logo.png'
import SearchContainer from '../SearchContainer/SearchContainer'

import './Header.css'

export default function Header() {
    return (
        <header>
            <img 
                id="logo"
                src={ TeleportLogo }
                alt="logo"
            />
            <SearchContainer />
        </header>
    )
}
