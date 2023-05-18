import React from 'react'

const Contribute = () => {

    // const { title, descriptionP1 } = config.scaffoldPage.topSection
    // const checkInstallationSection = config.scaffoldPage.checkInstallationSection
    // const useCasesTitle = config.installPage.useCasesTitle
    // const useCases = config.installPage.useCases
    // const installSection = config.installPage.installSection
    // const usageSection = config.installPage.usageSection
    // const discoveringStartersSection = config.installPage.discoveringStartersSection

    return (
        <>
            {/* Top Section(s) */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contribute To SBS
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    We love open-source! We value and appreciate all the feedback and help we can get so please don't be shy!
                </p>
            </div>

            <br />
            {/* Opening Issues */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Open An Issue
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Are you stuck, confused, or just want to give us some feedback? Feel free to open issues on the most relevnat public repository belonging to the <a href="https://github.com/Blockchain-Super-Scaffolder">Super BlockChain Scaffolder organization</a>.
                </p>
            </div>

            <br />
            {/* Adding A New Starter */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add A New Starter
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The "master list" of starters lives <a href="https://github.com/Blockchain-Super-Scaffolder/bss-master-list">its own special repository</a>, and the data describing each starter is held within the file named <a href="https://github.com/Blockchain-Super-Scaffolder/bss-master-list/blob/main/bss-master-list.yaml">bss-master-list.yaml</a> file.
                </p>
                <br />
                <h1 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Step 1) Stick A Fork In It
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Since you don't have permissions to push directly to this repository, you should _fork_ it and make the changes to your fork.
                </p>
                <br />
                <h1 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Step 2) Add Your Starter
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Append a new block the bottom document with information about your starter.
                </p>
                <pre className="one-line-install text-left p-2 text-xl br-2">
                    {`- name: 'Foundry Starter Kit'
    repo-url: 'https://github.com/your_github_account/starter_project_name'
    live-url: 'url for a live site for your project (or same as github repo url)'
    description: 'A description of your project.'
    maintainers:
    - 'Name, email, social handles, and / or other contact info'
    tags:
    - 'Example Tag'
    - 'Another Example Tag'`}
                </pre>
                <br />
                <h1 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Step 3) Open A Pull Request
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Once you've commited your changes to the bss-master-list.yaml file in your fork you'll want to <a href="https://github.com/Blockchain-Super-Scaffolder/bss-master-list/compare">open a pull request</a> across forks in the <a href="https://github.com/Blockchain-Super-Scaffolder/bss-master-list">bss-master-list repo</a>.
                </p>

                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    When you open a pull request some tests will automatically be run to verify things like that the master list is proper yaml, that all starter objects have valid keys, that the provided git repo url exists, etc. Note that your pull request will <b>NOT</b> be accepted if it has any failing tests.
                </p>

                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    When a member of the sbs core team approves your PR then your starter should be immediately available to be scaffolded! Users of the bss cli do <b>NOT</b> need to update their cli tool in order to see updated packages.
                </p>

                <br />
                <h1 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Step 4) Keep Your Project Repo Updated
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The master list stores more or less just a pointer to your project's git repository. This means that when you make updates to your project's repository you do not need to do anything to let the sbs cli know that there is a newer version available.
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The sbs cli will <b>always</b> scaffold the files and folders of the repository branch named <b>main</b>
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Your users will appreciate if you keep the starter in a stable state that compiles cleanly and has up-to-date dependencies! 😉
                </p>
            </div>

            <br />

            {/* Contributing To This Website */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contribute To This Website
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    This website is completely open-source with source code hosted in the <a href="https://github.com/Blockchain-Super-Scaffolder/bss-website">sbs-website repository</a>.
                    {/* We love open-source! We value and appreciate all the feedback and help we can get so please don't be shy! */}
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The site is built with modern frontend tools like Vite, React, TypeScript, Tailwind, Eslint, etc...
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    We'd love more contributors and will take all the help we can get! 🙏
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Feel free to open pull requests and / or issues describing your ideas for improving the site!
                </p>
            </div>

            <br />
            {/* Contributing To The CLI Tool Source Code */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contribute To The CLI Tool Source Code
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    The sbs cli tool is an open-source project built in Rust which lives in the <a href="https://github.com/Blockchain-Super-Scaffolder/bss-cli-tool">sbs-cli repository</a>.
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    We have a pretty clear roadmap for features we want to add to the sbs cli, but we are always open to new ideas!
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Feel free to open pull requests and / or issues describing your ideas for improving the tool or just letting us know you'd like to contribute somehow!
                </p>
            </div>

            <br />
            {/* Contributing To The CLI Tool Source Code */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Spread The Word
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    One last way we'd like to ask you to contribute to our success is by telling your friends about this cool thing we've made.
                </p>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Thanks for taking the time to check us out! 🙏
                </p>
            </div>

            <br />
        </>
    )
}

export default Contribute
