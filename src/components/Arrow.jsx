import React from 'react';

export default function Arrow({ direction, onClick }) {
  let flipHorizontally = direction === 'left' ? 'scale-x-[-1]' : '';

  return (
    <div
      className={`w-20 h-20 cursor-pointer transform ${flipHorizontally}`}
      onClick={onClick}
    >
      <lord-icon
        src="https://cdn.lordicon.com/zmkotitn.json"
        trigger="hover"
        colors="primary:#121331"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
