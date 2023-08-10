import React from "react";
import underConstructionImage from "/src/assets/underconstruction.jpg";

export function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <img src={underConstructionImage} alt="Under Construction" className="mx-auto w-64" />
        </div>

      </div>
    </div>
  );
}