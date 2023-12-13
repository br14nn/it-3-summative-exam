"use client";

import { twMerge } from "tailwind-merge";

interface IEditDataModalBodyProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

export default function EditDataModalBody({
  children,
  className,
  ...props
}: IEditDataModalBodyProps) {
  return (
    <form
      className={twMerge(
        "flex flex-col items-center gap-4 px-12 py-4",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
}
