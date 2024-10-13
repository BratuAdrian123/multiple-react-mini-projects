import axios from 'axios';
import { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  async function GetWeather(event) {
    event.preventDefault();

    const API_KEY = '6fd35e22febe4cad5f067d68785628de';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setWeather(response?.data);
      setError('');
    } catch (error) {
      setError(error?.message || 'City not Found!');
      setWeather(null);
    }
  }

  return (
    <div className="app">
      <h1>Weather Info</h1>
      <form onSubmit={GetWeather}>
        <input
          type="text"
          placeholder="Enter a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error ? <p className="error">{error}</p> : null}
      {weather ? (
        <div className="weather-info">
          <h1>
            {weather?.name}, {weather?.sys.country}
          </h1>
          <p>
            <strong>Temperature:</strong> {weather?.main.temp}°C
          </p>
          <p>
            <strong>Condition:</strong> {weather?.weather[0].description}
          </p>
          <p>
            <strong>Wind Speed:</strong> {weather?.wind.speed} m/s
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherApp;
