import countryService from '../services/countries'

const CountryList = ({ countries, filterName }) => {


    const countriesToShow = countries.filter(country =>
        country.name.common.toLowerCase().includes(filterName.toLowerCase())
    )

    if (filterName === '') {
        return (
            <div>
                Specifiy a filter to find countries
            </div>
        )
    }

    if (countriesToShow.length > 1 && countriesToShow.length < 10) {

        return (

            <div>
                {
                    countriesToShow.map(country =>
                        <div key={country.name.common}>
                            {country.name.common}
                        </div>
                    )}
            </div>
        )
    }

    if (countriesToShow.length === 1) {

        return (
            <div>
                {
                    countriesToShow.map(country =>
                        <div key={country.name.common}>
                            <h2>
                                {country.name.common}
                            </h2>
                            Capital {country.capital} <br />
                            Area {country.area}
                            <h3>
                                Languages
                            </h3>
                            <ul>
                                {Object.entries(country.languages).map(([key, language]) => (
                                    <li key={key}>
                                        {language} 
                                    </li>
                                ))}
                            </ul>
                            <img src={country.flags.png} style={{ height: '100px' }}/>
                        </div>
                    )}
            </div>
        )

    } else {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }


}

export default CountryList