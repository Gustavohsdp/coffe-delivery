import Image from "next/image";

import deliveryIllustration from "../../../public/assets/images/delivery_Illustration.svg";
import deliveryImg from "../../../public/icons/delivery.svg";
import locationImg from "../../../public/icons/location.svg";
import paymentImg from "../../../public/icons/payment.svg";

export default function Success() {
  return (
    <main className="flex justify-between flex-col">
      <section className="w-full h-[544px] flex flex-row justify-between items-center ">
        <div className="max-w-[588px]">
          <div className="flex flex-col gap-1">
            <h1 className="font-extrabold font-baloo2 text-[32px] text-yellow-900">
              Uhu! Pedido confirmado
            </h1>
            <p className="text-xl font-normal text-brown-700">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>

          {/* </div> <div className="flex flex-col gap-8 p-10 w-[526px] h-[270px] border-gradient mt-10 rounded-tr-xl rounded-tl-md rounded-bl-xl rounded-br-md"> */}
          <div className="flex flex-col gap-6 p-10 w-[526px] h-[270px] border-[1px] border-solid border-purple-900 mt-10 rounded-tr-[36px] rounded-tl-md  rounded-bl-[36px]  rounded-br-md">
            <div className="flex gap-3 items-center">
              <Image alt="cart" src={locationImg} height={32} width={32} />
              <div>
                <p className="text-base text-brown-600 font-normal">
                  Entrega em{" "}
                  <span className="text-base text-brown-600 font-bold">
                    Rua João Daniel Martinelli, 102
                  </span>
                </p>
                <span className="text-base text-brown-600 font-normal">
                  Farrapos - Porto Alegre, RS
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Image alt="cart" src={deliveryImg} height={32} width={32} />
              <div>
                <p className="text-base text-brown-600 font-normal">
                  Previsão de entrega
                </p>
                <span className="text-base text-brown-600 font-bold">
                  20 min - 30 min
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Image alt="cart" src={paymentImg} height={32} width={32} />
              <div>
                <p className="text-base text-brown-600 font-normal">
                  Pagamento na entrega
                </p>
                <span className="text-base text-brown-600 font-bold">
                  Cartão de Crédito
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            alt="cart"
            src={deliveryIllustration}
            height={293}
            width={492}
          />
        </div>
      </section>
    </main>
  );
}
