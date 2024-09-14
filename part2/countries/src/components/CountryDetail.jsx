import WeatherInfo from "./WeatherInfo"

const CountryDetail = ({ country }) => {

    console.log('render CountryDetail component')

    return (
        <div>
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
            <img src={country.flags.png} style={{ height: '100px' }} />
            <WeatherInfo
                country={country}
            />
        </div>
    )
}

export default CountryDetail