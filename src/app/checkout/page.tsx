"use client";

import { Button } from "@/components/Button";
import { Cart } from "@/components/Cart";
import { PaymentMethodSelect } from "@/components/PaymentMethodSelect";
import { useProducts } from "@/hooks/useProducts";
import { PAYMENT_METHODS } from "@/mocks/payment-methods";
import { formatCurrency } from "@/utils/formatCurrency";
import { zodResolver } from "@hookform/resolvers/zod";
import cogoToast from "cogo-toast";
import { DollarSign, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  cep: z
    .string()
    .regex(
      /^\d{5}-\d{3}$/,
      'CEP inválido. O CEP deve estar no formato "XXXXX-XXX"'
    ),
  address: z.string().nonempty("Requerido"),
  number: z.string().nonempty("Requerido"),
  complement: z.string().nonempty("Requerido"),
  neighborhood: z.string().nonempty("Requerido"),
  city: z.string().nonempty("Requerido"),
  uf: z.string().min(2, "Requerido").max(2, "Requerido"),
});

type FormValues = {
  cep: string;
  address: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export interface PaymentMethodProps {
  id: number;
  method: string;
}

export default function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodProps | null>(null);

  const { cart, createOrder } = useProducts();

  const router = useRouter();

  const handlePaymentMethodSelect = (paymentMethod: PaymentMethodProps) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  function handleNavigateSuccessPage() {
    router.push("/success");
  }

  const totalItens = cart.reduce((accumulator, item) => {
    const numericValue = parseFloat(item.value.replace(",", "."));
    return accumulator + numericValue * item.quantity;
  }, 0);

  const SHIPPING_VALUE = "3.50";

  const TOTAL_VALUE_CART = totalItens + parseFloat(SHIPPING_VALUE);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const order = {
      customer: {
        cep: data.cep,
        address: data.address,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        city: data.city,
        uf: data.uf,
      },
      itens: cart,
      PaymentMethod: selectedPaymentMethod,
    };

    try {
      createOrder(order);
      cogoToast.success("Pedido criado com sucesso", {
        position: "top-right",
      });
    } catch (err) {
      console.log(err);
    }

    handleNavigateSuccessPage();
  };

  return (
    <main className="flex justify-between flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="w-full flex flex-col md:flex-row justify-between items-start pb-32 px-4 lg:px-0">
          <div className=" md:sticky md:top-28 w-full md:max-w-[640px]">
            <h1 className="text-lg font-baloo2 text-brown-700 font-bold">
              Complete seu pedido
            </h1>

            <div className="bg-brown-100 py-10 px-10 rounded-md w-full md:w-[640px]  mt-4 ">
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
                  <div className="w-full flex flex-col gap-1">
                    <input
                      type="text"
                      id="cep"
                      {...register("cep")}
                      placeholder="CEP"
                      className={` 
                    w-full md:w-[200px]
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                    />

                    {errors.cep && (
                      <p className="text-red-500 text-xs">
                        {errors.cep.message}
                      </p>
                    )}
                  </div>

                  <div className=" flex flex-col gap-1">
                    <input
                      type="text"
                      id="address"
                      {...register("address")}
                      placeholder="Rua"
                      className={` 
                    w-full
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                    />

                    {errors.address && (
                      <p className="text-red-500 text-xs">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className=" flex flex-col md:flex-row items-center gap-4">
                    <div className="w-full md:w-[200px] flex flex-col gap-1">
                      <input
                        type="number"
                        id="number"
                        {...register("number")}
                        placeholder="Número"
                        className={` 
                    w-full md:w-[200px]
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                      />

                      {errors.number && (
                        <p className="text-red-500 text-xs">
                          {errors.number.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full flex flex-col gap-1">
                      <input
                        type="text"
                        id="complement"
                        {...register("complement")}
                        placeholder="Complemento"
                        className={` 
                    w-full
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                      />

                      {errors.complement && (
                        <p className="text-red-500 text-xs">
                          {errors.complement.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full  flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full  md:w-[200px] flex flex-col gap-1">
                      <input
                        type="text"
                        id="neighborhood"
                        {...register("neighborhood")}
                        placeholder="Bairro"
                        className={` 
                        w-full md:w-[200px]
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                      />

                      {errors.neighborhood && (
                        <p className="text-red-500 text-xs">
                          {errors.neighborhood.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full flex flex-col gap-1">
                      <input
                        type="text"
                        id="city"
                        {...register("city")}
                        placeholder="Cidade"
                        className={` h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                      />

                      {errors.city && (
                        <p className="text-red-500 text-xs">
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full md:w-[60px] flex flex-col gap-1">
                      <input
                        type="text"
                        id="uf"
                        {...register("uf")}
                        placeholder="UF"
                        className={` 
                    w-full md:w-[60px]
                    h-11 rounded-[4px] form-input bg-brown-200 p-3 border-[1px] border-solid border-brown-300 focus:outline-none focus:border-yellow-900 font-normal text-brown-600 text-sm`}
                      />

                      {errors.uf && (
                        <p className="text-red-500 text-xs w-[60px]">
                          {errors.uf.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brown-100 py-10 px-10 rounded-md w-full md:w-[640px]  mt-3">
              <div className="flex flex-row gap-2 items-start">
                <DollarSign size={22} color="#8047F8" />
                <div>
                  <p className="text-base text-brown-700">Pagamento</p>
                  <span className="text-sm text-brown-600">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </div>

              <div className="mt-8 gap-3 flex flex-col md:flex-row justify-between items-center">
                {PAYMENT_METHODS.map((method) => (
                  <PaymentMethodSelect
                    key={method.id}
                    paymentMethod={method}
                    onSelect={handlePaymentMethodSelect}
                    isSelected={method.id === selectedPaymentMethod?.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[448px] mt-5 md:mt-0">
            <h1 className="text-lg font-baloo2 text-brown-700 font-bold">
              Cafés selecionados
            </h1>

            <div className="bg-brown-100 py-10 px-10 w-full md:w-[448px] mt-4 rounded-tr-[36px] rounded-tl-md  rounded-bl-[36px]  rounded-br-md">
              {cart.map((cart) => (
                <div key={cart.id}>
                  <Cart product={cart} />

                  <div className="border-[1px] border-solid border-brown-300 mt-9 md:mt-6 mb-6" />
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between ">
                  <p className="text-sm text-brown-600">Total de itens</p>
                  <span className="text-sm text-brown-600">
                    {formatCurrency(totalItens.toFixed(2))}
                  </span>
                </div>

                <div className="flex flex-row justify-between">
                  <p className="text-sm text-brown-600">Entrega</p>
                  <span className="text-sm text-brown-600">
                    {formatCurrency(SHIPPING_VALUE)}
                  </span>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-xl text-brown-700 font-bold">Total</p>
                  <span className="text-xl text-brown-700 font-bold">
                    {formatCurrency(String(TOTAL_VALUE_CART))}
                  </span>
                </div>
              </div>
              <div className="mt-6 w-full">
                <Button
                  type="submit"
                  title="Confirmar pedido"
                  isBlocked={cart && cart?.length === 0}
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
