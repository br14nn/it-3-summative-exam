import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { cva } from "class-variance-authority";

const modalBodyVariants = cva("flex flex-col bg-text text-background");

interface IModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function ModalBody({
  children,
  className,
  ...props
}: IModalBodyProps) {
  return (
    <div className={twMerge(clsx(modalBodyVariants({ className })))} {...props}>
      {children}
    </div>
  );
}
