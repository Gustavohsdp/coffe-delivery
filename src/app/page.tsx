"use client";

import Image from "next/image";

import { CardCatalog } from "@/components/CardCatalog";
import { useProducts } from "@/hooks/useProducts";
import coffeMainImg from "../../public/assets/images/coffe main.png";
import cartImg from "../../public/icons/cart.svg";
import coffeImg from "../../public/icons/coffe.svg";
import deliveryImg from "../../public/icons/delivery.svg";
import packagingImg from "../../public/icons/packaging.svg";

export default function Home() {
  const { products } = useProducts();

  return (
    <main className="flex justify-between flex-col">
      <section className="w-full flex-col-reverse  md:flex-row  md:h-[544px] flex justify-between items-center px-4 lg:px-0">
        <div className="max-w-[588px] ">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold font-baloo2 text-3xl  md:text-5xl text-brown-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-lg md:text-xl font-normal text-brown-900">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 md:mt-16">
              <div className="flex items-center gap-3">
                <Image
                  alt="cart"
                  src={cartImg}
                  height={32}
                  width={32}
                  quality={100}
                />

                <span className="text-base text-brown-600">
                  Compra simples e segura
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  alt="cart"
                  src={packagingImg}
                  height={32}
                  width={32}
                  quality={100}
                />

                <span className="text-base text-brown-600">
                  Embalagem mantém o café intacto
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <Image
                  alt="cart"
                  src={deliveryImg}
                  height={32}
                  width={32}
                  quality={100}
                />

                <span className="text-base text-brown-600">
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  alt="cart"
                  src={coffeImg}
                  height={32}
                  width={32}
                  quality={100}
                />

                <span className="text-base text-brown-600">
                  Compra simples e segura
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-6 md:pb-0">
          <Image
            src={coffeMainImg}
            alt="Coffe main"
            width={476}
            height={360}
            quality={100}
          />
        </div>
      </section>

      <section className="py-8 pb-32 px-4 lg:px-0">
        <h2 className="text-2xl md:text-3xl font-baloo2 font-bold text-brown-700">
          Nossos cafés
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-14 gap-8 ">
          {products && products.length > 0
            ? products.map((coffe) => (
                <CardCatalog key={coffe.id} product={coffe} />
              ))
            : [1, 2, 3, 4].map((skeleton) => (
                <div
                  key={skeleton}
                  className="bg-brown-300 animate-pulse  w-full h-80  rounded-es-[36px] rounded-tr-[36px] rounded-tl-md px-5  rounded-br-md"
                />
              ))}
        </div>
      </section>
    </main>
  );
}
