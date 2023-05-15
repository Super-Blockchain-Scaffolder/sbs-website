import React from 'react'

import config from '../../config'

const Install = () => {
    console.log('config: ', config)

    const { company } = config

    return (
        <div>
            <h3>Install View</h3>
            <p> This is the Install view.</p>
            <p> Compan name: {company.name}</p>
        </div>
    )
}

export default Install
