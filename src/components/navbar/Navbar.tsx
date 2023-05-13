import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="NavBar">
            <h5>
                <Link to="/">Blockchain Super Scaffolder</Link>
            </h5>
            <ul className='nav-links'>
                <li><Link to="/Install">Install</Link></li>
                <li><Link to="/Search">Search</Link></li>
                <li><Link to="/Scaffold">Scaffold</Link></li>
                <li><Link to="/Contribute">Contribute</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
