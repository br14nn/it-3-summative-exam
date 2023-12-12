import { twMerge } from "tailwind-merge";

interface IModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function ModalHeader({
  children,
  className,
  ...props
}: IModalHeaderProps) {
  return (
    <header
      className={twMerge("bg-secondary px-4 py-2 font-semibold", className)}
      {...props}
    >
      {children}
    </header>
  );
}
