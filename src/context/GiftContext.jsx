import { createContext, useContext, useEffect, useState } from "react";

// Create the GiftContext to manage the global state
const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const storedGifts = JSON.parse(localStorage.getItem("gifts")) || [];

  const [gifts, setGifts] = useState(storedGifts);

  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  }, [gifts]);

  // Function to add a new gift to the list
  const addGift = (name, description, date) => {
    setGifts([...gifts, { id: gifts.length + 1, name, description, date }]);
  };

  // Delete a gift by ID
  const removeGift = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };


   const editGift = (id, newName, newDescription) => {
    setGifts(
      gifts.map((gift) =>
        gift.id === id
          ? { ...gift, name: newName, description: newDescription }
          : gift
      )
    );
  };

  const removeAll = () => {
    setGifts([]);
  }

  return (
    <GiftContext.Provider value={{ gifts, addGift, removeGift, editGift, removeAll }}>
      {children}
      {/* Provide access to the gifts, addGift and removeGift function to all components */}
    </GiftContext.Provider>
  );
};

export const useGifts = () => useContext(GiftContext);
