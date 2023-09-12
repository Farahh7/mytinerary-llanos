import React from 'react';
import underConstructionImage from "/src/assets/underconstruction.jpg";

export default function e404() {
  const imageStyle = {
    width: '100%', // Ajusta el ancho de la imagen al 100% del contenedor
    height: 'auto', // Ajusta la altura automáticamente para mantener la proporción original
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-4">
          <img src={underConstructionImage} alt="Under Construction" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

