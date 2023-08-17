import React from 'react';

const NotFoundPage = () => {
  return (
    <main className="bg-gray-100 text-gray-800 max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="md:order-2">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="mb-6">We couldn’t find the page you were looking for. It may have been moved, or it just doesn’t exist.</p>
        <a href="#" className="btn-link">Go Back Home</a>
      </div>

      <div className="md:order-1">
        <svg className="paper w-full" viewBox="0 0 300 300" role="img" aria-label="A piece of paper torn in half">
          {/* ... Contenido del SVG ... */}
        </svg>
      </div>
    </main>
  );
};

export default NotFoundPage;
