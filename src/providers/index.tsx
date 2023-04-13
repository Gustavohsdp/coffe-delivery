"use client";

import { ReactNode } from "react";

import { ProductsProvider } from "@/contexts/ProductsContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProductsProvider>{children}</ProductsProvider>
    </>
  );
};

export { Providers };
