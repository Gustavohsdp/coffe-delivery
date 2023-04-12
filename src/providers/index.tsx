"use client";

import { ProductsProvider } from "@/contexts/ProductsContext";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProductsProvider>{children}</ProductsProvider>
    </>
  );
};

export { Providers };
