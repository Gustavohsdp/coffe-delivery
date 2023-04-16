"use client";

import { Product } from "@/@types/product";
import { COFFES } from "@/mocks/coffes";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface IProductsContextData {
  // state
  cart: Product[];
  products: Product[];

  // functions
  addProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  removeUniqueProductToCart: (product: Product) => void;
}

const ProductsContext = createContext({} as IProductsContextData);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  function addProductToCart(product: Product, storage?: boolean) {
    const productAlreadyAdd = cart?.find((item) => item.id === product.id);

    if (productAlreadyAdd) {
      const updatedCart = cart?.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCart(updatedCart);
    } else {
      if (storage) {
        setCart([...cart, product]);
      } else {
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
      }
    }
  }

  function removeProductToCart(product: Product) {
    const productAddedToCart = cart?.find((item) => item.id === product.id);

    if (productAddedToCart?.quantity === 1) {
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

  function productList(cartStorage: Product[]) {
    const updatedProducts = COFFES.map((product) => {
      let cartItem = null;

      if (cartStorage && cartStorage.length > 0) {
        cartItem = cartStorage.find((item) => item.id === product.id);
      }

      if (cartItem) {
        return { ...product, quantity: cartItem.quantity };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }

  useEffect(() => {
    productList(cart);
  }, [cart]);

  useEffect(() => {
    if (cart?.length > 0) {
      localStorage.setItem("@coffe-delivery", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const storage = localStorage.getItem("@coffe-delivery");
    const cartStorage = storage ? JSON.parse(storage) : null;

    if (cartStorage.length > 0) {
      cartStorage?.forEach((item: Product) => addProductToCart(item, true));
      productList(cartStorage);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        cart,
        products,
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
