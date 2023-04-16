import { PaymentMethodProps } from "@/app/checkout/page";
import { Product } from "./product";


export interface Order {
  customer: {
      cep: string;
      address: string;
      number: number;
      complement: string;
      neighborhood: string;
      city: string;
      uf: string;
  },
  itens: Product[],
  PaymentMethod: PaymentMethodProps | null
}