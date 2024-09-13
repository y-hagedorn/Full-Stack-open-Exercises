import { useState, useEffect } from 'react'

import SearchFilter from './components/SearchFilter'
import CountryList from './components/CountryList'

import countryService from './services/countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    console.log('effect')

    countryService
      .getAll()
      .then(allCountries => {
        console.log('promise fulfilled')
        setCountries(allCountries)
      })
      .catch(error => {
        console.log('get request failed')
      })
  }, [])
  console.log('got', countries.length, 'countries from the server')

  const handleSearchInput = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }

  return (
    <>
      <SearchFilter
        searchName={searchName}
        handleSearchInput={handleSearchInput}
      />

      <CountryList
        countries={countries}
        filterName={searchName}
      />
    </>
  )
}

export default App