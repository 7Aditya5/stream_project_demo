import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  useEffect(() => {
    // Fetch weather data for a default city when the component mounts
    const defaultCity = 'London';
    fetchWeatherData(defaultCity).then((data) => {
      console.log(data);
      setWeatherData(data);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={city} onChange={handleInputChange} />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
