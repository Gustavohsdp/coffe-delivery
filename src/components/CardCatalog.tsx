import { Product } from "@/@types/product";
import Image from "next/image";
import { Counter } from "./Counter";
import { IconButton } from "./IconButton";
import { Label } from "./Label";

interface CardCatalogProps {
  product: Product;
}

export function CardCatalog({ product }: CardCatalogProps) {
  return (
    <div className="bg-brown-100 w-full h-80  rounded-es-[36px] rounded-tr-[36px] rounded-tl-md px-5  rounded-br-md">
      <div className="flex justify-center items-center mt-[-20px]">
        <Image alt="café" src={product.image} width="120" height="120" />
      </div>

      <div className="mt-3 flex justify-center items-center gap-1">
        {product.label.map((item) => (
          <Label key={item} title={item} />
        ))}
      </div>

      <div className="flex items-center justify-center flex-col mt-4">
        <h1 className="font-bold text-brown-700 text-xl">{product.title}</h1>
        <p className="text-center text-sm text-brown-500">
          {product.description}
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="  ">
          <p className="font-normal text-sm text-brown-600">
            R$
            <span className="font-extrabold text-2xl text-brown-600 pl-1">
              {product.value}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Counter product={product} />
          <IconButton />
        </div>
      </div>
    </div>
  );
}
