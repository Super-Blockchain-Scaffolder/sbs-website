import React from 'react'

import config from '../../config'
import { Link } from 'react-router-dom'

const Install = () => {

    const { title, descriptionP1, descriptionP2, descriptionP3 } = config.installPage.topSection
    const useCasesTitle = config.installPage.useCasesTitle
    const useCases = config.installPage.useCases
    const installSection = config.installPage.installSection
    const usageSection = config.installPage.usageSection
    const discoveringStartersSection = config.installPage.discoveringStartersSection

    return (
        <>
            {/* Top Section(s) */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    {title}
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-400">
                    {descriptionP1}
                </p>

            </div>

            <br />

            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <p className="text-xl font-normal tracking-tight text-white">
                    {descriptionP2}
                </p>
            </div>

            <br />

            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <p className="text-xl font-normal tracking-tight text-white">
                    {descriptionP3}
                </p>
            </div>

            <br />

            {/* Use Cases Section */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h3 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-white">
                    {useCasesTitle}
                </h3>

                <ul>
                    {useCases.map((useCaseIterator, index) => {
                        return <li className="text-xl font-normal tracking-tight text-white" key={"use case " + index}>
                            - {useCaseIterator.useCase}
                        </li>
                    })}
                </ul>
            </div>

            <br />

            {/* Installation Section */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    {installSection.title}
                </h1>
                <p className="mb-3 font-normal text-xl text-gray-400">
                    {installSection.description}
                </p>
            </div>

            <br />

            {/* One-line Install Section */}
            <div className="block text-center p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h2 className="mb-5 mt-2 text-xl font-bold tracking-tight text-white">
                    One-line install using <a href='https://npmjs.com'>npm</a>:
                </h2>
                <pre className="one-line-install max-w-fit m-auto">
                    npm i -g sbs-cli
                </pre>
                <br />
                <p className="mb-3 font-normal text-xl text-gray-400">
                    Note: If you already have a previous version of the sbs cli installed then the command above will replace it with the latest.
                </p>
            </div>

            <br />

            {/* Discovering Starters Section */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    {discoveringStartersSection.title}
                </h1>
                <p className="mb-3 font-normal text-xl text-gray-400">
                    You can browse, filter, and search through the complete list of starters on the <Link to="/search">search</Link> page.
                </p>
            </div>

            <br />

            {/* Usage Section */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    {usageSection.title}
                </h1>
                <p className="mb-3 font-normal text-xl text-gray-400">
                    See the <Link to="/scaffold">scaffold</Link> page for information on how to use the sbs cli tool to scaffold new projects!
                </p>

            </div>

            <br />

            {/* Contributing Section */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    Contributing
                </h1>
                <p className="mb-3 font-normal text-xl text-gray-400">
                    See the <Link to="/contribute">contribute</Link> page for information on contributing back to the project and adding more starters!
                </p>
            </div>
            
            <br/>

            {/* Uninstall */}
            <div className="block p-6 border rounded-lg shadow bg-gray-800 border-gray-700 text-xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-white">
                    Uninstall
                </h1>
                <p className="mb-3 font-normal text-xl text-gray-400">
                    The sbs cli tool can be uninstalled with npm's uninstall command.
                </p>
                <pre className="one-line-install max-w-fit m-auto">
                    npm uninstall -g sbs-cli
                </pre>
            </div>

            <br />
        </>

        // Here are some common use cases:

        // - Rapidly create a new project
        // - Create new sections of a project, like a new controller with unit tests
        // - Create modules or packages
        // - Bootstrapping new services
        // - Enforcing standards, best practices and style guides
        // - Promote new projects by letting users get started with a sample app
        // - Etc, etc

        // `sbs` is the name of our command line utility allowing the creation of projects utilizing scaffolding templates (referred to as "starters").

        // The "starters" are really just pointers to various repositories on github.

        // When you scaffold a starter the utility more or less clones that repository's files without the git metadata()

    )
}

export default Install
