import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Install from './views/Install/Install'
import Search from './views/Search/Search'
import NavBar from './components/navbar/Navbar'
import Scaffold from './views/Scaffold/Scaffold'
import Contribute from './views/Contribute/Contribute'
import Footer from './components/footer/Footer'

function App () {
    return (
        <>

            <NavBar />
            <div className="App">

                {/* React Router Stuff */}

                <br/>

                <Routes>
                    <Route path='/contribute' Component={Contribute} />
                    <Route path='/scaffold' Component={Scaffold} />
                    <Route path='/install' Component={Install} />
                    <Route path='/search' Component={Search} />
                    <Route path='/' Component={Home} />
                </Routes>

                <Footer/>

            </div>
        </>
    )
}

export default App
