import React from 'react'

import config from '../../config'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {

    const { mainTitle, blurbUnderMainTitle, secondSection } = config.homeView

    return (
        <>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mainTitle}
                </h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blurbUnderMainTitle}
                </p>

            </div>

            <br />

            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {secondSection.title}
                </h1>
                <br />

                {/* <img src="assets/scaffolding-people.png" /> */}

                <img src="scaffolding-people.png" className="m-auto" />
                {/* <img src="react.svg" /> */}
                {/* <img src="assets/react.svg" /> */}
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {blurbUnderMainTitle}
                </p> */}

            </div>

            <br />

            <p className="text-xl p-2"><Link to="/install">Install</Link> the bss cli, <Link to="/search">find</Link> a starter project for you, <Link to="/scaffold">scaffold</Link> it out, and start developing!</p>

            <br />

            <div className="block text-left p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-xl">
                <h2 className="mb-5 mt-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    One-line install using <a href='https://npmjs.com'>npm</a>:
                </h2>

                <pre className="one-line-install max-w-fit m-auto">
                    npm i -g bss
                </pre>

            </div>

            <br />
        </>
    )
}

export default Home
