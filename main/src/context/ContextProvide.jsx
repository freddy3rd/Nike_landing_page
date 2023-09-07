import React, { createContext } from "react";

export const context = createContext();

export function ContextProvider({ children }) {
  return (
    <ContextProvide value={{ imageRef, opacity, scale }}>
      {children}
    </ContextProvide>
  );
}
