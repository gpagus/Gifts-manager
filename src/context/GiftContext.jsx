import { createContext, useContext, useState } from "react";

// Create the GiftContext to manage the global state
const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  // Function to add a new gift to the list
  const addGift = (name, description) => {
    setGifts([...gifts, { id: gifts.length + 1, name, description }]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children} {/* Provide access to the gifts and addGift function to all components */}
    </GiftContext.Provider>
  );
};

export const useGifts = () => useContext(GiftContext);