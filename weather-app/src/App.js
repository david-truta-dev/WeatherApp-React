import React, {useState} from 'react'
import './App.css'

function App() {

    const apiKey = '34f7c80d3e206ca9f05faaab207541cd'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")
  
    const getWeather = (event) =>{
        if(event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    return (
      <div className="container">
            <input className="input" 
            type="search"
            placeholder="Enter a city !"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather} />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p>Welcome to my weather app! Enter a city to get the weather info.</p>
                </div>):
                (
                    <div>
                        <p>{weatherData.name}</p>
                        <p>{Math.round(weatherData.main.temp)}°C</p>
                        <p>{weatherData.weather[0].main}</p>
                    </div>
                )}
        </div>
    )
}

export default App