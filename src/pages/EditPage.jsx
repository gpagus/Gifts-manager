import { useGifts } from "../context/GiftContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  const { gifts, editGift } = useGifts();
  const { id } = useParams(); // ID tomado de la URL
  const navigate = useNavigate();

  // Busca el regalo que vamos a editar
  const giftToEdit = gifts.find((gift) => gift.id === parseInt(id));

  // Estados locales para el formulario
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // Rellenamos los inputs con la info del regalo actual
  useEffect(() => {
    if (giftToEdit) {
      setName(giftToEdit.name);
      setDescription(giftToEdit.description);
      setDate(giftToEdit.date);
    }
  }, [giftToEdit]);

  // Manejo de envío de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    editGift(giftToEdit.id, name, description, date);
    navigate("/list"); // Al guardar, vuelve a la lista
  };

  // Si no encuentra el regalo (URL inválida), mostramos un mensaje
  if (!giftToEdit) {
    return <p className="text-center text-red-500">Regalo no encontrado</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-400 mb-4">Editar Regalo</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-pink-400 text-white p-2 rounded hover:bg-pink-500 transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditPage;
