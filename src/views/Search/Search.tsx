import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YAML from 'yaml'

const Search = () => {

    let [sbsMasterListData, setSbsMasterListData]: [any, any] = useState({})
    let [sbsAllStarterTemplates, setSbsAllStarterTemplates]: [any, any] = useState([])
    let [filteredStarterTemplates, setFilteredStarterTemplates]: [any, any] = useState([])
    let [searchInputText, setSearchInputText]: [any, any] = useState('')
    let [lastSubmittedSearchText, setLastSubmittedSearchText]: [any, any] = useState('')

    useEffect(() => {

        fetch("https://raw.githubusercontent.com/Super-Blockchain-Scaffolder/sbs-master-list/main/sbs-master-list.yaml")
            .then(response => response.text())
            .then(raw_text => {
                return YAML.parse(raw_text.toString())
            })
            .then(data => {
                // console.log('starters data: ', data);  // nice for debugging
                setSbsAllStarterTemplates(data["starter-templates"]);
                setFilteredStarterTemplates(data["starter-templates"]);
                setSbsMasterListData(data);
            })
            .catch(err => {
                console.log('error: ', err)
            })

    }, [])

    function handleSubmitSearch(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        setLastSubmittedSearchText(searchInputText);

        const newFilteredTemplates = sbsAllStarterTemplates.filter((sbsStarterTemplate: any) => {

            if (sbsStarterTemplate.name && sbsStarterTemplate.description) {

                if (sbsStarterTemplate.name.toLowerCase().includes(searchInputText.toLowerCase()) ||
                    sbsStarterTemplate.description.toLowerCase().includes(searchInputText.toLowerCase()))
                    return sbsStarterTemplate
            }

        })

        setFilteredStarterTemplates(newFilteredTemplates);

    }

    return (
        <>
            {/* Top Section(s) */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Search
                </h1>
                <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                    Explore the various Super Blockchain Scaffolder starters here or <Link to="/contribute">create your own</Link>!
                </p>
            </div>

            <br />
            {/* Top Section(s) */}
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">
                <form onSubmit={(e) => handleSubmitSearch(e)}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search SBS Starters..."
                            value={searchInputText}
                            onChange={(event) => {
                                setSearchInputText(event.target.value);
                            }}></input>
                        <button type="submit" className="text-white absolute my-auto right-2 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>

            <br />

            {(filteredStarterTemplates).map((starterTemplate: any, index: number) => {

                return (<div key={"starter-template-" + index}>
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">

                        <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {starterTemplate['name'] ? starterTemplate['name'] : ''}
                        </h1>
                        <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                            <a href={starterTemplate['repo-url'] ? starterTemplate['repo-url'] : ''}>{starterTemplate['repo-url'] ? starterTemplate['repo-url'] : ''}</a>
                        </p>
                        <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                            {starterTemplate["description"]}
                        </p>
                        <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                            Maintainers: {starterTemplate["maintainers"]}
                        </p>
                        <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                            Tags: {starterTemplate["tags"]}
                        </p>
                    </div>
                    <br />
                </div>)
            })}

            {/* Not Results From Search */}
            {filteredStarterTemplates.length == 0 && <div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-2xl">

                    <h1 className="mb-5 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hmm... 🧐
                    </h1>
                    <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
                        It seems that there are no starter templates with the phrase "{lastSubmittedSearchText}" in either the name or the description...
                    </p>
                </div>
                <br />
            </div>
            }

        </>
    )
}

export default Search
