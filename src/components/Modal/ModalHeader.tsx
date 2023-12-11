import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { cva, VariantProps } from "class-variance-authority";

const modalHeaderVariants = cva("bg-primary font-bold");

interface IModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function ModalHeader({
  children,
  className,
  ...props
}: IModalHeaderProps) {
  return (
    <div
      className={twMerge(clsx(modalHeaderVariants({ className })))}
      {...props}
    >
      {children}
    </div>
  );
}
