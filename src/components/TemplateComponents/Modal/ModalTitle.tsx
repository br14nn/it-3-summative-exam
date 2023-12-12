import { twMerge } from "tailwind-merge";

interface IModalTitleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function ModalTitle({
  children,
  className,
  ...props
}: IModalTitleProps) {
  return (
    <header
      className={twMerge(
        "bg-secondary px-4 py-1 font-bold text-text",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}
