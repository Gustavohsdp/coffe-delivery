import Image from "next/image";
import cafeGelado from "../../public/assets/images/Café Gelado.png";
import { Counter } from "./Counter";
import { IconButton } from "./IconButton";
import { Label } from "./Label";

export function CardCatalog() {
  return (
    <div className="bg-brown-100 w-64 h-80  rounded-es-[36px] rounded-tr-[36px] rounded-tl-md px-5  rounded-br-md relative">
      <div className="absolute top-[-20px] left-16">
        <Image alt="café" src={cafeGelado} width="120" height="120" />
      </div>

      <div className=" mt-[112px] flex justify-center items-center gap-1">
        <Label title="tradicional" />
        <Label title="com leite" />
      </div>

      <div className="flex items-center justify-center flex-col mt-4">
        <h1 className="font-bold text-brown-700 text-xl">Expresso Cremoso</h1>
        <p className="text-center text-sm text-brown-500">
          Café expresso tradicional com espuma cremosa
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="  ">
          <p className="font-normal text-sm text-brown-600">
            R$
            <span className="font-extrabold text-2xl text-brown-600 pl-1">
              9,90
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Counter />
          <IconButton />
        </div>
      </div>
    </div>
  );
}
