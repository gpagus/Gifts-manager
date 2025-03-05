import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-400 mb-4">
        404 - Página no encontrada 😢
      </h1>

      <p className="text-lg text-gray-700 max-w-lg mb-6">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>

      {/* Button to navigate back to the home page */}
      <Link
        to="/"
        className="px-4 py-2 bg-pink-400 text-white font-bold rounded-lg shadow-lg hover:bg-pink-500 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
