import React, { createContext, useState, useEffect } from "react";
import { fetchUIData } from "../services/api";

export const UiContext = createContext(null);

export const UiProvider = ({ children }) => {
  const [uiData, setUiData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUIData();
      setUiData(data);
    };
    loadData();
  }, []);

  return <UiContext.Provider value={{ uiData }}>{children}</UiContext.Provider>;
};
