import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <h5>
                <Link to="/">Super Blockchain Scaffolder</Link>
            </h5>
            <ul className='nav-links'>
                <li><Link to="/install">Install</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/scaffold">Scaffold</Link></li>
                <li><Link to="/contribute">Contribute</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
