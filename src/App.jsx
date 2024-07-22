import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import TempNav from "./components/TempNav";

const App = () => {
  //Use of GSAP.
  useGSAP(() => {
    // gsap.from(".intro-text", {
    //   x: 350,
    //   duration: 1,
    //   ease: "power2.in",
    // });
    // gsap.to(".intro-text", {
    //   y: -200,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 3.5,
    //   ease: "power3.easeOut",
    // });
    gsap.to("#intro-cover", {
      top: "-100%",
      delay: 4,
      duration: 1.2,
    });
  });

  return (
    <>
      <div className="main bg-slate-600 ">
        <div>
          <div className="navbar w-full flex justify-between items-center ">
            <TempNav />
            <div className="nav-links p-3 ">
              <ul className="flex list-none gap-4 ">
                <NavLink
                  to="/forecast"
                  className={({ isActive }) => {
                    return isActive ? "active-link" : "";
                  }}
                >
                  <li>
                    <p>ForeCast</p>
                    <span className="back-cover"></span>
                  </li>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? "active-link" : "";
                  }}
                >
                  <li>
                    <p>About</p>
                    <span className="back-cover"></span>
                  </li>
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => {
                    return isActive ? " active-link" : "";
                  }}
                >
                  <li>
                    <p>Contact</p>
                    <span className="back-cover"></span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      <div
        id="intro-cover"
        className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black text-white bg-opacity-50"
      >
        <h1 className="intro-text text-[4vw] font-bold">Weather</h1>
        <h1 className="intro-text text-[4vw] font-bold">Forecast</h1>
        <h1 className="intro-text text-[4vw] font-bold">For You</h1>
      </div>
    </>
  );
};

export default App;
