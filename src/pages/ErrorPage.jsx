import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-red-100">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Error 404: Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <NavLink
          to="/"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
