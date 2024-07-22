import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="secondary">
        <div
          id="one"
          className="h-full w-full bg-[url('../src/assets/main-background.jpg')] bg-cover bg-center"
        >
          <div className="hero-title-section flex flex-col gap-5 justify-center items-center">
            <h1 className="text-6xl font-bold text-center">
              Precise Weather Precisely for you.
            </h1>
            <NavLink to="/forecast">
              <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">ForeCast</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
