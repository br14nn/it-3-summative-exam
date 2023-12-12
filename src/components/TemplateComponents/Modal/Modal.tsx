"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { ModalContext } from "@/components/TemplateComponents/context/ModalContext";

import OpenModalButton from "./OpenModalButton";

interface IModalProps {
  buttonCName?: string;
  buttonLabel?: string;
  children?: React.ReactNode;
}

export default function Modal({
  buttonCName,
  buttonLabel = "Open Modal",
  children,
}: IModalProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <ModalContext.Provider value={{ setShowModal, showModal }}>
        <OpenModalButton
          className={twMerge(
            "hover:bg-accent-dark-1 bg-accent py-2 font-medium",
            buttonCName,
          )}
        >
          {buttonLabel}
        </OpenModalButton>
        {/* {showModal && <p>Modal</p>} */}
        {showModal && children}
      </ModalContext.Provider>
    </>
  );
}
