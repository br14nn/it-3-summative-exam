import { createContext } from "react";

export type TProdForm = {
  prod_name: string;
  prod_price: number | "";
  prod_quantity: number | "";
};

export interface IAddItemModalContext {
  prodForm: TProdForm;
  setProdForm: (state: TProdForm) => void;
}

export const AddItemModalContext = createContext<IAddItemModalContext | null>(
  null,
);
