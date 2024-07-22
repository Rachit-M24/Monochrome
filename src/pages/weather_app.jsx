import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./ForeCast";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "5aedbcadf5102e63e4d5d89d1e567b83"; // Replace with your OpenWeatherMap API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(weatherUrl);
      const weatherData = await response.json();

      if (response.ok) {
        setWeather(weatherData);
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
        setError(null); // Clear error state
      } else {
        setError(`City not found: ${city}`); // Set error state
      }
    } catch (error) {
      setError(`Error fetching weather data: ${error.message}`); // Set error state
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 border border-gray-400 rounded-md"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-md"
        >
          Search
        </button>
      </form>
      {/* error paragraph */}
      <div className="text-red-500 mb-4">
        <p>{error}</p>
      </div>
      {weather && <WeatherDisplay weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
