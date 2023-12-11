import { twMerge } from "tailwind-merge";

interface IModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function ModalHeader({
  children,
  className,
  ...props
}: IModalHeaderProps) {
  return (
    <div className={twMerge("bg-primary font-bold", className)} {...props}>
      {children}
    </div>
  );
}
