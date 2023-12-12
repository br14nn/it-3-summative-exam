"use client";

import { useContext, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import {
  ModalContext,
  IModalContext,
} from "@/components/TemplateComponents/context/ModalContext";
import {
  AddItemModalContext,
  IAddItemModalContext,
} from "@/components/MyComponents/context/AddItemModalContext";

interface IModalWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function ModalWindow({
  children,
  className,
  ...props
}: IModalWindowProps) {
  const modalRef = useRef<any>(null);

  const { setShowModal } = useContext(ModalContext) as IModalContext;
  const { setProdForm } = useContext(
    AddItemModalContext,
  ) as IAddItemModalContext;

  //when clicked outside it will close this component
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setProdForm({
          prod_name: "",
          prod_price: "",
          prod_quantity: "",
        });
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={modalRef}
      className={twMerge(
        "fixed inset-0 mx-auto my-auto h-fit w-fit overflow-hidden rounded-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
