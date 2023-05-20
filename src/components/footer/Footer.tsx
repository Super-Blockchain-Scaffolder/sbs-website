import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-xl">
            {/* <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {mainTitle}
            </h1> */}
            <p className="my-1 font-normal text-xl text-gray-700 dark:text-gray-400">
                Copyright 2023  Super Blockchain Scaffolder
            </p>

        </div>
    )
}

export default Footer
