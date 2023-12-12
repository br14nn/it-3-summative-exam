"use client";

import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import {
  ModalContext,
  IModalContext,
} from "@/components/TemplateComponents/context/ModalContext";

import CustomButton from "../CustomButton";

interface IOpenModalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function OpenModalButton({
  children = "Open Modal",
  ...props
}: IOpenModalButtonProps) {
  const { showModal, setShowModal } = useContext(ModalContext) as IModalContext;

  const handleClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <CustomButton onClick={handleClick} {...props}>
      {children}
    </CustomButton>
  );
}
