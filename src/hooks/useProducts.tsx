import { useContext } from "react";

import {
  IProductsContextData,
  ProductsContext,
} from "@/contexts/ProductsContext";

const useProducts = (): IProductsContextData => {
  return useContext(ProductsContext);
};

export { useProducts };
