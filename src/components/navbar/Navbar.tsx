import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'



const NavBar = () => {
    return (
        <div className="NavBar justify-between m-1" >
            <div className='text-left'>
                <Link to="/" className='inline-flex flex-row flex-start p-2 text-center md:text-left w-full'>
                    <img src="Super-SBS-Woman-0.5x.jpg" className='max-w-16 w-16 h-auto' />
                    <h5 className='px-3 m-auto'>
                        Super Blockchain Scaffolder
                    </h5>
                </Link>
            </div>
            <ul className='nav-links hidden md:inline-flex pr-5'>
                {listOfNavLinks()}
            </ul>
            {/* <button className='p-4 inline-flex md:hidden border-white border-solid'>☰</button> */}

            {/* Mobile Toggle Button */}
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle md:hidden">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>

            {/* Mobile Toggle Panel */}
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    {listOfNavLinks()}
                </ul>
            </div>
        </div>
    )

    function closeNav() {

        const sidebar = document.getElementById("openSidebarMenu");

        if (sidebar != null && (sidebar as any).checked)
            (sidebar as any).checked = false;
    }

    function listOfNavLinks() {
        return <>
            <Link to="/install" onClick={() => closeNav()}><li>Install</li></Link>
            <Link to="/search" onClick={() => closeNav()}><li>Search</li></Link>
            <Link to="/scaffold" onClick={() => closeNav()}><li>Scaffold</li></Link>
            <Link to="/contribute" onClick={() => closeNav()}><li>Contribute</li></Link>
        </>
    }

}



export default NavBar
