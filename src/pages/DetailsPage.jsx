import { useParams, useNavigate } from "react-router-dom";
import { useGifts } from "../context/GiftContext";

const DetailsPage = () => {
  // Get the list of gifts from the context
  const { gifts } = useGifts();

  // Extract the "id" parameter from the URL
  const { id } = useParams();

  // Find the specific gift by its ID (convert id to a number)
  const gift = gifts.find((g) => g.id === parseInt(id));

  // useNavigate hook to navigate between pages
  const navigate = useNavigate();

  return gift ? (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-400 mb-4">Detalles del Regalo</h2>

      {/* Gift details card */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center">
        <p className="text-lg font-bold">Para: {gift.name}</p>
        <p className="text-gray-700">Descripción: {gift.description}</p>
        <p className="text-gray-700">Fecha de entrega: {gift.date}</p>
      </div>

      {/* Button to go back to the gift list */}
      <button
        onClick={() => navigate("/list")}
        className="mt-4 bg-pink-400 text-white p-2 rounded hover:bg-pink-600 transition"
      >
        Volver
      </button>
    </div>
  ) : (
    // Message if the gift is not found
    <p className="text-center text-gray-700">Regalo no encontrado</p>
  );
};

export default DetailsPage;
