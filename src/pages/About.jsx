import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    gsap.from(".about-header", {
      duration: 1,
      opacity: 0,
      y: -50,
      delay: 0.5,
    });
    gsap.from(".about-text", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.8,
    });
  }, []);
  return (
    <div className="h-[70.1vh] flex flex-col justify-center items-center">
      <div className="about-header text-4xl font-bold mb-4">
        <h1>About Our Weather App</h1>
      </div>
      <div className="about-text text-lg leading-relaxed max-w-md">
        <p>
          Our weather app is designed to provide you with the most accurate and
          up-to-date weather forecasts, no matter where you are in the world.
        </p>
        <p className="font-semibold">
          Our team of expert meteorologists use cutting-edge technology to bring
          you the latest weather data, including current conditions, hourly
          forecasts, and 7-day outlooks.
        </p>
        <p>
          Whether you're planning a trip, checking the weather for your daily
          commute, or just curious about the weather, our app has got you
          covered.
        </p>
      </div>
      <div className="mt-8">
        <NavLink to="/details">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
