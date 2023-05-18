import React from 'react'

import config from '../../config'
import { Link } from 'react-router-dom'

const Scaffold = () => {

    const { title, descriptionP1 } = config.scaffoldPage.topSection
    const checkInstallationSection = config.scaffoldPage.checkInstallationSection
    const useCasesTitle = config.installPage.useCasesTitle
    const useCases = config.installPage.useCases
    const installSection = config.installPage.installSection
    const usageSection = config.installPage.usageSection
    const discoveringStartersSection = config.installPage.discoveringStartersSection

    return (
        <>
            {/* Top Section(s) */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    {descriptionP1}
                </p>
            </div>

            <br />

            {/* Check Installation Section */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {checkInstallationSection.title}
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    {checkInstallationSection.description}
                </p>
                <pre className="my-4 one-line-install max-w-fit m-auto">
                    sbs --version
                </pre>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    If a verson number is printed to the console, you're good to go! 👍
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    If running the version command prints an error saying something like, "sbs: command not found" then you have not installed the sbs cli tool. See the <Link to="/install">install</Link> page for more help on installing the sbs cli tool.
                </p>
            </div>

            <br />

            {/* Decision 1 - Where To Scaffold Section */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Decision 1) &nbsp;Where To Scaffold
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    You have two options for where you would like the sbs cli tool to put the files and folders when scaffolding a project.
                </p>
                <ul className="mt-3 font-normal p-2">
                    <li className="text-2xl p-5 mx-3 font-normal tracking-tight text-gray-900 dark:text-white">
                        - <b>Current Directory</b>: Files and folders from the starter project will be written directly to the current working directory, <b>overwriting any existing files and folders with the same name.</b>
                    </li>
                    <li className="text-2xl p-5 mx-3 font-normal tracking-tight text-gray-900 dark:text-white">
                        - <b>Named Directory</b>: A new directory will be created (with the provided string argument as the name for the directory), and all files and folders from the starter project will be written within said named directory.
                    </li>
                </ul>
            </div>

            <br />

            {/* Decision 2 - Which Starter To Scaffold */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Decision 2) &nbsp;Which Starter To Scaffold
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    There are so many awesome starters available to scaffold by the sbs cli tool that making a decision can be really tough sometimes! 🫠
                </p>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    You can browse, filter, and search through the complete list of starters on the <Link to="/search">search</Link> page.
                </p>
            </div>

            <br />

            {/* Interactive Mode Scaffold */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Scaffolding - Interactive Mode
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Simply run the bss command without any command line arguments or flags to run it in interactive mode.
                </p>
                <pre className="my-4 one-line-install max-w-fit m-auto">
                    sbs
                </pre>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    When running in interactive mode the cli tool will propmt you for input about where to scaffold and which starter you would like to scaffold.
                </p>
            </div>

            <br />

            {/* Direct Mode Scaffold */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Scaffolding - Direct Mode
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    By passing flag arguments when running the sbs cli tool you can skip the interactive prompts and have the command directly create specified files in the specified location.
                </p>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Here is an example of scaffolding the starter named "Foundry Chainlink Starter" into a folder named "foo".
                </p>
                <pre className="my-4 one-line-install max-w-fit m-auto">
                    sbs -n foo -s "Foundry Chainlink Starter"
                </pre>
            </div>

            <br />

            {/* Options & Help */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Options & Help
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    You can view all the available options and flags by running the sbs cli tool with the --help flag.
                </p>
                <pre className="my-4 one-line-install max-w-fit m-auto">
                    sbs --help
                </pre>
            </div>

            <br />

            {/* Contributing Section */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contributing
                </h1>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Want to add your own awesome blockchain starter so other people can scaffold it?
                </p>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Well, yes you can do it, and it's not even that hard!
                </p>
                <p className="my-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The the <Link to="/contribute">contribute</Link> page for more information on contributing.
                </p>
            </div>

            <br />
        </>
    )
}

export default Scaffold
