"use client";

import { useState } from "react";
//components
import CustomTextInput from "@/components/TemplateComponents/CustomTextInput";
import CustomButton from "../../TemplateComponents/CustomButton";
import EditDataModalTitle from "./EditDataModalTitle";
import EditDataModalBody from "./EditDataModalBody";
import updateProduct from "@/utils/apiRequests/updateProduct";
import revalidatePath from "@/utils/actions/revalidatePath";

const defaultCustomTextInputClass =
  "border-background py-1 px-2 font-medium text-center text-background transition-colors duration-300 placeholder:text-background/80 focus:border-background/60";

interface IEditDataModalProps {
  prod_id: number;
}

export default function EditDataModal({ prod_id }: IEditDataModalProps) {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [updateButtonDisabled, setUpdateButtonDisabled] =
    useState<boolean>(false);
  const [formDetails, setFormDetails] = useState<IProduct>({
    prod_name: "",
    prod_price: "",
    prod_quantity: "",
  });

  const handleOpenModal = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setFormDetails({
      prod_name: "",
      prod_price: "",
      prod_quantity: "",
    });
    setUpdateButtonDisabled(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUpdateButtonDisabled(true);

    const { ok } = (await updateProduct(
      prod_id,
      formDetails,
    )) as IProductApiRes;

    if (ok) {
      await revalidatePath("/", "layout");

      handleCloseModal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormDetails((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  return (
    <>
      <CustomButton
        className={`bg-accent px-6 py-4 font-medium hover:bg-accent-dark-1`}
        onClick={handleOpenModal}
      >
        Edit
      </CustomButton>

      {showEditModal && (
        <div
          className="fixed inset-0 z-[998] h-screen w-screen bg-background/50 backdrop-blur"
          onClick={handleCloseModal}
        />
      )}

      <div
        className={`${
          showEditModal ? "translate-x-[-0%]" : "translate-x-[-100%]"
        } fixed left-0 top-0 z-[999] flex h-full w-fit  flex-col overflow-hidden rounded-r-lg bg-primary-light-1 transition-transform duration-300`}
      >
        <EditDataModalTitle>Edit Data</EditDataModalTitle>

        <EditDataModalBody onSubmit={handleFormSubmit}>
          <CustomTextInput
            className={`${defaultCustomTextInputClass}`}
            id="prod_name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            value={formDetails.prod_name}
            onChange={handleInputChange}
          />
          <CustomTextInput
            className={`${defaultCustomTextInputClass}`}
            id="prod_price"
            type="number"
            placeholder="Price($)"
            value={formDetails.prod_price}
            onChange={handleInputChange}
          />
          <CustomTextInput
            className={`${defaultCustomTextInputClass}`}
            id="prod_quantity"
            type="number"
            placeholder="Quantity"
            value={formDetails.prod_quantity}
            onChange={handleInputChange}
          />

          <CustomButton
            className="bg-accent px-6 py-4 hover:bg-accent-dark-1"
            type="submit"
            disabled={updateButtonDisabled}
          >
            Update
          </CustomButton>
        </EditDataModalBody>
      </div>
    </>
  );
}
