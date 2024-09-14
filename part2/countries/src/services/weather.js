import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/'

const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup

// code: country code: cca2
const getWeather = (capital, code) => {
    const request = axios.get(`${baseUrl}/weather?q=${capital},${code}&APPID=${api_key}`)
    return request.then(response => response.data)
}

export default { getWeather }