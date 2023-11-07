import { createContext, useContext, useState } from 'react';

const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  return (
    <CRMContext.Provider value={{ selectedCardIndex, setSelectedCardIndex }}>
      {children}
    </CRMContext.Provider>
  );
};

export const useCRM = () => {
  return useContext(CRMContext);
};