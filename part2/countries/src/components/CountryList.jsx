import { useState, useEffect } from 'react'

import countryService from '../services/countries'

import CountryDetail from './CountryDetail'

const CountryList = ({ countries, filterName }) => {

    const [country, setCountry] = useState(null)
    const [countryName, setCountryName] = useState('')

    useEffect(() => {
        if (countryName) {
            countryService
                .getCountry(countryName)
                .then(returnedCountry => {
                    console.log('promise fulfilled')
                    setCountry(returnedCountry)
                    setCountryName('')
                })
                .catch(error => {
                    console.log('get request failed')
                })
        }
    }, [countryName])

    useEffect(() => {
        setCountry(null)
    }, [filterName])

    const countriesToShow = countries.filter(country =>
        country.name.common.toLowerCase().includes(filterName.toLowerCase())
    )

    const handleShow = (name) => {
        setCountryName(name)
        setCountry(null)
        console.log(`Country to show: ${name}`)
    }

    // Case when no filter is entered
    if (filterName === '') {
        return (
            <div>
                <br />
                Specify a filter to find countries
            </div>
        )
    }

    // Case when there are more than 10 matches for the filter
    if (countriesToShow.length > 10) {
        return (
            <div>
                <br />
                Too many matches, specify another filter
            </div>
        )
    }

    // Case when there are less or equal 10, but more than one matches
    // Country detail is rendered when the 'show' button is clicked
    if (countriesToShow.length > 1 && countriesToShow.length <= 10) {

        return (

            <div>
                <br />
                {
                    countriesToShow.map(country =>
                        <div key={country.name.common}>
                            {country.name.common} <button onClick={() => handleShow(country.name.common)}>show</button>
                        </div>
                    )}
                {country && <CountryDetail country={country} />}
            </div>
        )
    }

    // Case when there is exactly one match
    if (countriesToShow.length === 1) {
        const [singleMatch] = countriesToShow // Get the first (and only) country
        return (
            <div>
                <CountryDetail country={singleMatch} />
            </div>
        )

    } else {
        return (
            <div>
                <br />
                No match found, specify another filter
            </div>
        )
    }


}

export default CountryList