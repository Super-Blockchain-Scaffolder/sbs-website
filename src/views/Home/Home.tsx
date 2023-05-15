import React from 'react'

import config from '../../config'

const Home = () => {

    const { mainTitle, blurbUnderMainTitle } = config.homeView

    return (

        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-xl">
            <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {mainTitle}
            </h1>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blurbUnderMainTitle}
            </p>
        </div>
    )
}

export default Home
