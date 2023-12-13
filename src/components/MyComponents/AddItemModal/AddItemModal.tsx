"use client";

import { useState } from "react";

//components
import CustomButton from "@/components/TemplateComponents/CustomButton";
import CustomTextInput from "@/components/TemplateComponents/CustomTextInput";
import ModalHeader from "./ModalHeader";
import ModalCloserBackground from "./ModalCloserBackground";
import ModalWindow from "./ModalWindow";
//utils
import createNewProduct from "@/utils/apiRequests/createNewProduct";
import revalidatePath from "@/utils/actions/revalidatePath";

const defaultCustomTextInputClass =
  "w-[300px] border-background px-3 py-1 text-center font-medium text-black transition-colors duration-300 placeholder:text-background/80 focus:border-background/60";

export default function AddItemModal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] =
    useState<boolean>(false);
  const [prodForm, setProdForm] = useState<IProduct>({
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
    setSubmitButtonDisabled(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setProdForm((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitButtonDisabled(true);

    const res = await createNewProduct(prodForm);

    if (res.ok) {
      await revalidatePath("/", "layout");

      handleCloseModal();
    } else {
      alert(`Failed created an item (${res.response})`);

      handleCloseModal();
    }
  };

  return (
    <>
      <CustomButton
        onClick={handleOpenModal}
        className="bg-accent px-4 py-2 font-medium hover:bg-accent-dark-1"
      >
        Add Item
      </CustomButton>

      {showModal && <ModalCloserBackground onClick={handleCloseModal} />}

      {showModal && (
        <ModalWindow>
          <ModalHeader>Create New Item</ModalHeader>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 bg-primary-light-1 px-12 py-4"
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
            <CustomButton
              className="w-full bg-accent py-3 font-semibold hover:bg-accent-dark-1 disabled:bg-accent-dark-1"
              disabled={submitButtonDisabled}
            >
              Create Item
            </CustomButton>
          </form>
          <div className="h-[40px] w-full bg-secondary" />
        </ModalWindow>
      )}
    </>
  );
}
