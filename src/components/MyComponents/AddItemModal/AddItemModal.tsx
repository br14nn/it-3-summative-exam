"use client";

import { useState } from "react";

import CustomButton from "@/components/TemplateComponents/CustomButton";
import CustomTextInput from "@/components/TemplateComponents/CustomTextInput";
import ModalHeader from "./ModalHeader";
import ModalCloserBackground from "./ModalCloserBackground";
import ModalWindow from "./ModalWindow";

const defaultCustomTextInputClass =
  "w-[300px] border-background px-3 py-1 text-center font-medium text-black transition-colors duration-300 placeholder:text-background/80 focus:border-background/60";

interface IProdForm {
  prod_name: string;
  prod_price: number | "";
  prod_quantity: number | "";
}

export default function AddItemModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [prodForm, setProdForm] = useState<IProdForm>({
    prod_name: "",
    prod_price: "",
    prod_quantity: "",
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProdForm({
      prod_name: "",
      prod_price: "",
      prod_quantity: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setProdForm((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleCloseModal();
  };

  return (
    <>
      <CustomButton
        onClick={handleOpenModal}
        className="hover:bg-accent-dark-1 bg-accent px-4 py-2 font-medium"
      >
        Add Item
      </CustomButton>

      {showModal && <ModalCloserBackground onClick={handleCloseModal} />}

      {showModal && (
        <ModalWindow>
          <ModalHeader>Create New Item</ModalHeader>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 bg-primary px-12 py-4"
          >
            <CustomTextInput
              className={defaultCustomTextInputClass}
              id="prod_name"
              type="text"
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
              placeholder="quantity"
              value={prodForm.prod_quantity}
              onChange={handleInputChange}
            />
            <CustomButton className="hover:bg-accent-dark-1 w-full bg-accent py-3 font-semibold">
              Create Item
            </CustomButton>
          </form>
          <div className="h-[40px] w-full bg-secondary" />
        </ModalWindow>
      )}
    </>
  );
}
