"use client";

import { Product } from "@/@types/product";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface IProductsContextData {
  // state
  cart: Product[];

  // functions
  addProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  removeUniqueProductToCart: (product: Product) => void;
}

const ProductsContext = createContext({} as IProductsContextData);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  function addProductToCart(product: Product) {
    const productAlreadyAdd = cart?.find((item) => item.id === product.id);

    if (productAlreadyAdd) {
      const updatedCart = cart?.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  }

  function removeProductToCart(product: Product) {
    const productAddedToCart = cart?.find((item) => item.id === product.id);

    if (productAddedToCart?.quantity === 0) {
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart?.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );

      setCart(updatedCart);
    }
  }

  function removeUniqueProductToCart(product: Product) {
    const updatedCart = cart?.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <ProductsContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductToCart,
        removeUniqueProductToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { type IProductsContextData, ProductsContext, ProductsProvider };
