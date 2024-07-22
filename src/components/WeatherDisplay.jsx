import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg">Temperature: {weather.main.temp}°C</p>
      <p className="text-lg">Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
