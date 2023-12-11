"use client";

import { useState, useEffect, useRef } from "react";
import CustomButton from "../CustomButton";

interface ICustomModelProps {
  children: React.ReactNode;
  buttonCName?: string;
  buttonLabel?: string;
}

export default function Modal({
  children,
  buttonCName,
  buttonLabel,
}: ICustomModelProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    //close modal when click outside of the modalRef
    const handleCloseModal = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
        console.log(modalRef.current);
      }
    };

    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    !showModal ? setShowModal(true) : setShowModal(false);
  };

  return (
    <>
      <CustomButton className={buttonCName} onClick={handleClick}>
        {buttonLabel}
      </CustomButton>

      {/* Modal Window */}
      {showModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 mx-auto my-auto h-fit w-fit overflow-hidden rounded-lg bg-text"
        >
          {children}
        </div>
      )}
    </>
  );
}
