import { Link } from "react-router-dom";
import { useGifts } from "../context/GiftContext";

const ListPage = () => {
  const { gifts } = useGifts(); // Access the global context to retrieve the list of gifts
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-400 mb-4">Lista de Destinatarios</h2>
      {gifts.length === 0 ? (
        <p className="text-gray-700">No hay regalos pendientes.</p>
      ) : (
        <ul className="bg-white p-4 shadow-lg rounded-lg w-full max-w-md">
          {gifts.map((gift) => (
            <li key={gift.id} className="border-b last:border-none py-2 text-lg">
              {/* Link to the gift details page */}
              <Link to={`/details/${gift.id}`} className="text-pink-400 hover:underline">{gift.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPage;
