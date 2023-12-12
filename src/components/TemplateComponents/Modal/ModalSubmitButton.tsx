"use client";

import { useContext } from "react";

import { ModalContext, IModalContext } from "../context/ModalContext";
import {
  AddItemModalContext,
  IAddItemModalContext,
} from "@/components/MyComponents/context/AddItemModalContext";
import CustomButton from "../CustomButton";

interface IModalSubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function ModalSubmitButton({
  children = "Submit",
  ...props
}: IModalSubmitButtonProps) {
  return <CustomButton {...props}>{children}</CustomButton>;
}
