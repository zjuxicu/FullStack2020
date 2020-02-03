import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])

    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        const countries = response.data
        console.log(countries)
    })
   
    return (
        <div>
            <p>find countries</p>

        </div>
    )
}