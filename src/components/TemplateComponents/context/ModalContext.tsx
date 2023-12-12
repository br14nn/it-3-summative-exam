import { createContext } from "react";

export interface IModalContext {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}

export const ModalContext = createContext<IModalContext | null>(null);
