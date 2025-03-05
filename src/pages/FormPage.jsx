import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGifts } from "../context/GiftContext";

const FormPage = () => {
    const { addGift } = useGifts(); // Access the global context to add a new gift
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [name, setName] = useState(""); // State for storing the gift recipient's name
    const [description, setDescription] = useState(""); // State for storing the gift description

    // Handles form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !description) return;
      addGift(name, description);
      navigate("/list"); // Redirects to the recipients list page
    };

    return (
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Agregar Regalo</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          {/* Input field for recipient's name */}
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />

          {/* Input field for gift description */}
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />

          {/* Submit button to add a new gift */}
          <button type="submit" className="w-full bg-pink-400 text-white p-2 rounded hover:bg-pink-500 transition">
            Agregar
          </button>
        </form>
      </div>
    );
  };

export default FormPage;
