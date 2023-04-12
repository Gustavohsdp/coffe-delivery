"use client";

import { createContext, type ReactNode } from "react";

interface IProductsContextData {}

const ProductsContext = createContext({} as IProductsContextData);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};

export { type IProductsContextData, ProductsContext, ProductsProvider };
