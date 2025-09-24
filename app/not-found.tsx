import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-black bg-gray-100 py-2 px-4 rounded-md mb-6 -mt-8 text-7xl">
          <span className="text-primary">4</span>
          <span className="text-primary/70">0</span>
          <span className="text-primary">4</span>
        </h2>
        <h1 className="text-5xl text-center font-bold text-Primary mb-6">
          Page Not Found
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
