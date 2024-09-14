import { useState, useEffect } from 'react'

import weatherService from '../services/weather'

const WeatherInfo = ({ country }) => {

    console.log('render WeatherInfo component')

    const [weather, setWeather] = useState(null)
    const [iconCode, setIconCode] = useState(null)

    useEffect(() => {
        weatherService
            .getWeather(country.capital, country.cca2)
            .then(returnedWeather => {
                console.log('getWeather: promise fulfilled')
                setWeather(returnedWeather)
                setIconCode(returnedWeather.weather[0].icon)
            })
            .catch(error => {
                console.log('getWeather: request failed')
            })
    }, [])

    const imgUrl = 'https://openweathermap.org/img/wn'

    const getWeatherIcon = (iconCode) => {
        const url = `${imgUrl}/${iconCode}@2x.png`
        return url
    }

    if (weather && iconCode) {

        return (
            <div>
                <h2>
                    Weather in {country.capital}
                </h2>
                <div>
                    Temperature: {(weather.main.temp  - 273.15).toFixed(1)} °C <br />
                </div>
                <div>
                    <img src={getWeatherIcon(iconCode)} style={{ height: '100px' }} /> <br />
                </div>
                <div>   
                    Wind speed: {weather.wind.speed} m/s
                </div>
            </div>
        )

    }

}

export default WeatherInfo