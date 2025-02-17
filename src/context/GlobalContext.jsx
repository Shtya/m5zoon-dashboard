"use client";

import { createContext, useContext, useState } from "react";

// Create Context
const GlobalContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {
   
	const [isOpenPopup , setisOpenPopup] = useState(false)

    return (
        <GlobalContext.Provider value={{ isOpenPopup, setisOpenPopup }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom Hook to use the context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
