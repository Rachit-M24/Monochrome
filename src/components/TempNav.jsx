import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const TempNav = () => {
  const [city, setCity] = useState("Ahmedabad");
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState(null);
  const [inputCity, setInputCity] = useState("");

  const apiKey = "5aedbcadf5102e63e4d5d89d1e567b83"; // Replace with your OpenWeatherMap API key
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(weatherUrl);
      const data = await response.json();
      setCity(data.name);
      setTemp(data.main.temp);
    } catch (error) {
      setError("Error fetching weather data!");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearchClick = () => {
    const inpBox = document.querySelector(".inp-box");
    inpBox.style.display = inpBox.style.display === "block" ? "none" : "block";

    if (inputCity !== "") {
      setCity(inputCity);
      fetchWeatherData();
    }
  };

  // const handleInputChange = (e) => {
  //   setInputCity(e.target.value);
  //   inputCity === city ? setTemp(temp) : "error";
  //   // console.log(e.target.value);
  // };

  // const handleSearchClick = () => {
  //   const inpBox = document.querySelector(".inp-box");

  //   // if (inpBox.style.display === "block") {
  //   //   inpBox.style.display = "none";
  //   // } else {
  //   //   inpBox.style.display = "block";
  //   // }
  //   inpBox.style.display = inpBox.style.display === "block" ? "none" : "block";
  // };

  return (
    <div>
      <div className="temp-nav flex items-center px-2 py-1 rounded-full">
        <a
          href="/"
          className="location-temp bg-black text-white p-[8px] text-[18px] rounded-full font-bold"
        >
          {city},<span className="city-temp font-extrabold"> {temp}°C</span>
        </a>
        <button
          id="search-btn"
          onClick={handleSearchClick}
          className="bg-white text-black px-1 mx-2 text-[18px] font-bold rounded-full  border-black border-2"
        >
          +
        </button>
        <div className="inp-box hidden">
          <input
            type="text"
            value={inputCity}
            onChange={handleInputChange}
            placeholder="Enter city"
          />
          <button
            className="bg-white mx-2 p-1 rounded-full"
            onClick={handleInputChange}
          >
            Change city
          </button>
        </div>

        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default TempNav;
