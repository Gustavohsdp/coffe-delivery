import { Product } from "@/@types/product";
import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import { Counter } from "./Counter";
import { RemoveButton } from "./RemoveButton";

interface CartProps {
  product: Product;
}

export function Cart({ product }: CartProps) {
  const { removeUniqueProductToCart } = useProducts();

  return (
    <div className="w-full md:w-[368px] h-20 py-2 px-1 bg-brown-100 rounded-md flex flex-col md:flex-row justify-between">
      <div className="flex flex-row gap-5">
        <Image alt="café" src={product.image} width="64" height="64" />

        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-brown-700">
            {product.title}
          </p>

          <div className="flex flex-row gap-2">
            <Counter product={product} />
            <RemoveButton
              title="remover"
              onClick={() => removeUniqueProductToCart(product)}
            />
          </div>
        </div>
      </div>

      <span className="text-brown-600 text-base font-bold mt-3 md:mt-0">
        R$ 9,90
      </span>
    </div>
  );
}
