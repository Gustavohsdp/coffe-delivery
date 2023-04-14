import { Button } from "@/components/Button";
import { Cart } from "@/components/Cart";
import { Input } from "@/components/Input";
import { PaymentMethodSelect } from "@/components/PaymentMethodSelect";
import { MapPin } from "lucide-react";

export default function Checkout() {
  return (
    <main className="flex justify-between flex-col">
      <section className="w-full  flex flex-row justify-between items-start pb-32 ">
        <div className="max-w-[640px]">
          <h1 className="text-lg font-baloo2 text-brown-700 font-bold">
            Complete seu pedido
          </h1>

          <div className="bg-brown-100 py-10 px-10 rounded-md w-[640px]  mt-4 ">
            <div>
              <div className="flex flex-row gap-2 items-start">
                <MapPin size={22} color="#C47F17" />
                <div>
                  <p className="text-base text-brown-700">
                    Endereço de Entrega
                  </p>
                  <span className="text-sm text-brown-600">
                    Informe o endereço onde deseja receber seu pedido
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Input placeholder="CEP" sizeInput="200px" />
                <Input placeholder="Rua" />

                <div className="flex flex-row items-center justify-between gap-4">
                  <Input placeholder="Número" sizeInput="200px" />
                  <Input placeholder="Complemento" />
                </div>

                <div className="flex flex-row items-center justify-between gap-4">
                  <Input placeholder="Bairro" sizeInput="200px" />
                  <Input placeholder="Complemento" />
                  <Input placeholder="UF" sizeInput="60px" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brown-100 py-10 px-10 rounded-md w-[640px]  mt-3">
            <div className="flex flex-row gap-2 items-start">
              <MapPin size={22} color="#C47F17" />
              <div>
                <p className="text-base text-brown-700">Pagamento</p>
                <span className="text-sm text-brown-600">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div className="mt-8 gap-3 flex justify-between items-center">
              <PaymentMethodSelect title="Cartão de débito" />
              <PaymentMethodSelect title="Cartão de crédito" />
              <PaymentMethodSelect title="Dinheiro" />
            </div>
          </div>
        </div>

        <div className="max-w-[448px]">
          <h1 className="text-lg font-baloo2 text-brown-700 font-bold">
            Cafés selecionados
          </h1>

          <div className="bg-brown-100 py-10 px-10 w-[448px] mt-4 rounded-tr-[36px] rounded-tl-md  rounded-bl-[36px]  rounded-br-md">
            {[1, 2].map((cart) => (
              <div key={cart}>
                <Cart />

                <div className="border-[1px] border-solid border-brown-300 mt-6 mb-6" />
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between ">
                <p className="text-sm text-brown-600">Total de itens</p>
                <span className="text-sm text-brown-600">R$ 29,70</span>
              </div>

              <div className="flex flex-row justify-between">
                <p className="text-sm text-brown-600">Entrega</p>
                <span className="text-sm text-brown-600">R$ 3,50</span>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl text-brown-700 font-bold">Total</p>
                <span className="text-xl text-brown-700 font-bold">
                  R$ 33,20
                </span>
              </div>
            </div>
            <div className="mt-6 w-full">
              <Button title="Confirmar pedido" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
