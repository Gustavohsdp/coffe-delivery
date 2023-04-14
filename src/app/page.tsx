"use client";

import Image from "next/image";

import { CardCatalog } from "@/components/CardCatalog";
import { COFFES } from "@/mocks/coffes";
import coffeMainImg from "../../public/assets/images/coffe main.png";
import cartImg from "../../public/icons/cart.svg";
import coffeImg from "../../public/icons/coffe.svg";
import deliveryImg from "../../public/icons/delivery.svg";
import packagingImg from "../../public/icons/packaging.svg";

export default function Home() {
  return (
    <main className="flex justify-between flex-col">
      <section className="w-full h-[544px] flex flex-row justify-between items-center ">
        <div className="max-w-[588px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold font-baloo2 text-5xl text-brown-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl font-normal text-brown-900">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 mt-16">
              <div className="flex items-center gap-3">
                <Image alt="cart" src={cartImg} height={32} width={32} />

                <span className="text-base text-brown-600">
                  Compra simples e segura
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image alt="cart" src={packagingImg} height={32} width={32} />

                <span className="text-base text-brown-600">
                  Embalagem mantém o café intacto
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex items-center gap-3">
                <Image alt="cart" src={deliveryImg} height={32} width={32} />

                <span className="text-base text-brown-600">
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image alt="cart" src={coffeImg} height={32} width={32} />

                <span className="text-base text-brown-600">
                  Compra simples e segura
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image src={coffeMainImg} alt="Coffe main" width={476} height={360} />
        </div>
      </section>

      <section className="py-8 pb-32">
        <h1 className="text-3xl font-baloo2 font-bold text-brown-700">
          Nossos cafés
        </h1>

        <div className="grid grid-cols-4 mt-14 gap-8 ">
          {COFFES.map((coffe) => (
            <CardCatalog key={coffe.id} coffe={coffe} />
          ))}
        </div>
      </section>
    </main>
  );
}
