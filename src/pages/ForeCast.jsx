import React from "react";
import "../App.css";

const Forecast = ({ forecast }) => {
  return (
    <div className="bg-white  rounded-lg shadow-md w-[95%]">
      <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
      <div className="space-y-4 w-full">
        {forecast.list.slice(0, 5).map((day) => (
          <div
            key={day.dt}
            className="span-box flex justify-between items-center"
          >
            <span className="weekend-span">
              {new Date(day.dt_txt).toLocaleDateString()}
            </span>
            <span className="weekend-span">{day.main.temp}°C </span>
            <span className="weekend-span">{day.weather[0].description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
