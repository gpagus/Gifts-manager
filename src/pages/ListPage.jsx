import { Link } from "react-router-dom";
import { useGifts } from "../context/GiftContext";
import { useEffect, useState } from "react";

const ListPage = () => {
  const { gifts, removeGift, removeAll } = useGifts();
  const [search, setSearch] = useState("");

  const filteredGifts = gifts.filter((gift) =>
    gift.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-400 mb-4">
        Lista de Destinatarios
      </h2>

      {filteredGifts.length > 0 && <h3>Número de resultados: {filteredGifts.length}</h3>}

      <input
        type="text"
        placeholder="Buscar regalo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md p-2 mb-4 border rounded"
      />

      {filteredGifts.length === 0 ? (
        <p className="text-gray-700">
          No hay regalos que coincidan con la búsqueda.
        </p>
      ) : (
        <ul className="bg-white p-4 shadow-lg rounded-lg w-full max-w-md">
          {filteredGifts.map((gift) => (
            <li
              key={gift.id}
              className="border-b last:border-none py-2 text-lg"
            >
              <div className="flex justify-between">
                <Link
                  to={`/details/${gift.id}`}
                  className="text-pink-400 hover:underline"
                >
                  {gift.name}
                </Link>
                <div className="flex gap-2">
                  <button
                    className="cursor-pointer text-red-500 hover:scale-125"
                    onClick={() => removeGift(gift.id)}
                  >
                    ❌
                  </button>
                  <Link
                    to={`/edit/${gift.id}`}
                    className="cursor-pointer text-blue-500 hover:scale-125"
                  >
                    ✏️
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {gifts.length > 0 && (
        <button
          onClick={removeAll}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700 transition cursor-pointer"
        >
          Limpiar Lista
        </button>
      )}
    </div>
  );
};

export default ListPage;
