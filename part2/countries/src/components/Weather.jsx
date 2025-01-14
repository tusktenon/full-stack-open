import axios from 'axios'
import { useEffect, useState } from 'react'

function Weather({ country }) {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    const apiKey = import.meta.env.VITE_OPENWEATHER_KEY
    const apiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${apiKey}`
    axios.get(apiCall).then(response => {
      setCurrent(response.data.current)
    })
  }, [])

  if (!current) {
    return <p>Fetching current weather...</p>
  }

  const iconURL = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`

  return (
    <>
      <h3>Weather in {country.capital}</h3>
      <p>Temperature: {current.temp}°C</p>
      <img src={iconURL} />
      <p>Wind: {current.wind_speed} m/s</p>
    </>
  )
}

export default Weather
