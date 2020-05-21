import React from 'react'
import {Redirect} from 'react-router-dom'

export default function FourZeroFour(){

    return (
        <div>
            <h2>Page not found, redirecting to home</h2>
            <Redirect to='/' />
        </div>
    )
}

