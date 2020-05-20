import React from 'react'
import {Redirect} from 'react-router-dom'
export default function MissingPage (){
return (
    <div>
    <h2>Page not found</h2>
    <Redirect to="/"/>

    </div>
)
}