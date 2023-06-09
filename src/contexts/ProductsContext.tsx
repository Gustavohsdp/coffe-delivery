"use client";

import { Order } from "@/@types/order";
import { Product } from "@/@types/product";
import { COFFES } from "@/mocks/coffes";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface IProductsContextData {
  // state
  cart: Product[];
  products: Product[];
  order: Order | null;

  // functions
  addProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  removeUniqueProductToCart: (product: Product) => void;
  createOrder: (order: Order) => void;
}

const ProductsContext = createContext({} as IProductsContextData);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<Order | null>(null);

  function addProductToCart(product: Product) {
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
      addItemLocalStorage(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
      addItemLocalStorage([...cart, newProduct]);
    }
  }

  function removeProductToCart(product: Product) {
    const productAddedToCart = cart?.find((item) => item.id === product.id);

    if (productAddedToCart?.quantity === 1) {
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
      addItemLocalStorage(updatedCart);
    } else {
      const updatedCart = cart?.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
      addItemLocalStorage(updatedCart);
    }
  }

  function removeUniqueProductToCart(product: Product) {
    const updatedCart = cart?.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    addItemLocalStorage(updatedCart);
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

  function addItemLocalStorage(cart: Product[]) {
    localStorage.setItem("@coffe-delivery", JSON.stringify(cart));
  }

  function createOrder(order: Order) {
    setOrder(order);
    setCart([]);
    localStorage.removeItem("@coffe-delivery");
  }

  useEffect(() => {
    productList(cart);
  }, [cart]);

  useEffect(() => {
    const storage = localStorage.getItem("@coffe-delivery");
    const cartStorage = storage ? JSON.parse(storage) : null;

    if (cartStorage && cartStorage.length > 0) {
      setCart(cartStorage);
      productList(cartStorage);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        cart,
        products,
        order,
        addProductToCart,
        removeProductToCart,
        removeUniqueProductToCart,
        createOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { type IProductsContextData, ProductsContext, ProductsProvider };
