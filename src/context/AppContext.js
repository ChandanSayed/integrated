'use client';

import { createContext, useContext, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [arabicLanguage, setArabicLanguage] = useState(false);

  return <AppContext.Provider value={{ arabicLanguage, setArabicLanguage }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
