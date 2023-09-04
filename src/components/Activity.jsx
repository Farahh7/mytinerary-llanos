import React from 'react';
import underConstructionImage from "/src/assets/underconstruction.jpg";


export default function e404() {
  return (
    <div className="w-[450px] h-[250px] flex flex-col items-center justify-start bg-slate-100 mb-4">
      <div className="text-center">
        <div className="mb-4">
          <img src={underConstructionImage} alt="Under Construction" className="mx-auto w-132" />
        </div>

      </div>
    </div>
  );
}