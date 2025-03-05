import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-pink-400 mb-4">
        Bienvenido a la gestión de regalos
      </h1>
      <img src="./gift.webp" alt="Gift" className="rounded-lg mb-6 w-48" />
      <p className="text-lg text-gray-700 max-w-lg">
        Evita el clásico 'calcetines otra vez'. Organiza tus regalos y sorprende
        de verdad.
      </p>
    </div>
  );
};

export default HomePage;
