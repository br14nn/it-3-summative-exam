"use client";

import { useState, useContext } from "react";

import { AddItemModalContext, TProdForm } from "./context/AddItemModalContext";

import CustomTextInput from "../TemplateComponents/CustomTextInput";
import Modal from "../TemplateComponents/Modal/Modal";
import ModalBody from "../TemplateComponents/Modal/ModalBody";
import ModalTitle from "../TemplateComponents/Modal/ModalTitle";
import ModalWindow from "../TemplateComponents/Modal/ModalWindow";
import ModalSubmitButton from "../TemplateComponents/Modal/ModalSubmitButton";

const defaultCustomTextInputClass =
  "w-[300px] border-background px-3 py-1 text-center text-background font-medium transition-colors duration-300 placeholder:text-background/80 focus:border-background/50";

export default function AddItemModal() {
  const [prodForm, setProdForm] = useState<TProdForm>({
    prod_name: "",
    prod_price: "",
    prod_quantity: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setProdForm((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AddItemModalContext.Provider value={{ prodForm, setProdForm }}>
      <Modal buttonLabel="Add Item">
        <ModalWindow>
          <ModalTitle>Create New Item</ModalTitle>
          <ModalBody>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <CustomTextInput
                className={defaultCustomTextInputClass}
                id="prod_name"
                placeholder="Name"
                autoComplete="off"
                value={prodForm.prod_name}
                onChange={handleInputChange}
              />
              <CustomTextInput
                className={defaultCustomTextInputClass}
                id="prod_price"
                type="number"
                placeholder="Price"
                value={prodForm.prod_price}
                onChange={handleInputChange}
              />
              <CustomTextInput
                className={defaultCustomTextInputClass}
                id="prod_quantity"
                type="number"
                placeholder="Quantity"
                value={prodForm.prod_quantity}
                onChange={handleInputChange}
              />
              <ModalSubmitButton className="hover:bg-accent-dark-1 w-full bg-accent py-2 font-medium">
                Create Item
              </ModalSubmitButton>
            </form>
          </ModalBody>
        </ModalWindow>
      </Modal>
    </AddItemModalContext.Provider>
  );
}
