import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YAML from 'yaml'

const Search = () => {

    let [sbsMasterListData, setSbsMasterListData]: [any, any] = useState({})
    let [sbsStarterTemplates, setSbsStarterTemplates]: [any, any] = useState([])

    useEffect(() => {

        console.log('STARTUP')

        fetch("https://raw.githubusercontent.com/Super-Blockchain-Scaffolder/sbs-master-list/main/sbs-master-list.yaml")
            .then(response => response.text())
            // 4. Setting *dogImage* to the image url that we received from the response above

            .then(raw_text => {
                console.log('raw text: ', raw_text);
                return YAML.parse(raw_text.toString())
            }
            )
            .then(data => {
                console.log('data: ', data);
                setSbsStarterTemplates(data["starter-templates"]);
                setSbsMasterListData(data);
            })
            .catch(err => {
                console.log('error: ', err)
            })

    }, [])

    function handleSubmitSearch(e: FormEvent<HTMLFormElement>) {
    
        e.preventDefault();

        console.log(`Form submitted, ${e}`);    

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
                <form onSubmit = {(e) => handleSubmitSearch(e)}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search SBS Starters..." required></input>
                        <button type="submit" className="text-white absolute my-auto right-2 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>

            <br />

            {/* {JSON.stringify(sbsMasterListData)} */}

            {(sbsStarterTemplates).map((starterTemplate: any, index: number) => {

                return (<div >
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

        </>
    )
}

export default Search
